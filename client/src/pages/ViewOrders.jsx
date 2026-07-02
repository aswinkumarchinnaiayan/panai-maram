import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

import {
  Download,
  PackageCheck,
  Truck,
  IndianRupee,
  CalendarDays,
  CreditCard,
  User,
  Package,
} from "lucide-react";
const API_URL = import.meta.env.VITE_API_URL;
const ViewOrders = () => {

  // STATE
  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  // USER INFO
  const userInfo =
    JSON.parse(
      localStorage.getItem(
        "userInfo"
      )
    );


  // FETCH ORDERS
  useEffect(() => {

    const fetchOrders =
      async () => {

        try {

          const { data } =
            await axios.get(

               `${API_URL}/api/orders/${userInfo._id}`
            );

          setOrders(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    if (userInfo?._id) {

      fetchOrders();
    }

  }, []);


  // DOWNLOAD BILL
  const downloadBill =
    (order) => {

      const doc =
        new jsPDF();

      const primary =
        [144, 65, 0];

      const light =
        [245, 241, 235];

      const dark =
        [45, 27, 18];


      // HEADER
      doc.setFillColor(
        ...primary
      );

      doc.rect(
        0,
        0,
        210,
        42,
        "F"
      );


      // BRAND
      doc.setTextColor(255);

      doc.setFontSize(26);

      doc.text(
        "PANAI MARAM",
        14,
        20
      );

      doc.setFontSize(10);

      doc.text(
        "Traditional Tamil Heritage Products",
        14,
        30
      );


      // INVOICE
      doc.setFontSize(18);

      doc.text(
        "INVOICE",
        150,
        20
      );

      doc.setFontSize(10);

      doc.text(

        `#${order._id.slice(-6)}`,

        160,

        30
      );


      // CUSTOMER BOX
      doc.setFillColor(
        ...light
      );

      doc.roundedRect(
        14,
        52,
        182,
        45,
        4,
        4,
        "F"
      );

      doc.setTextColor(
        ...primary
      );

      doc.setFontSize(13);

      doc.text(
        "Customer Details",
        20,
        65
      );

      doc.setTextColor(
        ...dark
      );

      doc.setFontSize(11);

      doc.text(

        `Name : ${order.shippingAddress?.fullName}`,

        20,

        77
      );

      doc.text(

        `Mobile : ${order.shippingAddress?.mobile}`,

        20,

        86
      );

      doc.text(

        `Payment : ${order.paymentMethod}`,

        120,

        77
      );

      doc.text(

        `Date : ${new Date(order.createdAt).toLocaleDateString()}`,

        120,

        86
      );


      // ADDRESS
      doc.text(

        `Address : ${order.shippingAddress?.address}, ${order.shippingAddress?.city}`,

        20,

        95
      );


      // PRODUCTS TABLE
      autoTable(doc, {

        startY: 110,

        head: [[

          "Product",

          "Quantity",

          "Price",

          "Total",
        ]],

        body:
          order.orderItems.map(
            (item) => [

              item.title,

              item.quantity,

              `₹${item.price}`,

              `₹${

                Number(
                  item.price.replace(
                    "₹",
                    ""
                  )
                ) *

                item.quantity
              }`,
            ]
          ),

        theme: "grid",

        styles: {

          fontSize: 11,

          cellPadding: 4,
        },

        headStyles: {

          fillColor:
            primary,

          textColor: 255,

          halign:
            "center",

          fontStyle:
            "bold",
        },

        alternateRowStyles: {

          fillColor:
            [252, 248, 243],
        },
      });


      // TOTAL BOX
      const finalY =
        doc.lastAutoTable.finalY;

      doc.setFillColor(
        ...primary
      );

      doc.roundedRect(
        120,
        finalY + 15,
        76,
        24,
        4,
        4,
        "F"
      );

      doc.setTextColor(255);

      doc.setFontSize(15);

      doc.text(

        `Grand Total : ₹${order.totalPrice}`,

        127,

        finalY + 30
      );


      // FOOTER
      doc.setTextColor(120);

      doc.setFontSize(10);

      doc.text(

        "Thank you for supporting traditional Tamil heritage.",

        14,

        280
      );

      doc.text(

        "Panai Maram • Natural • Sustainable",

        14,

        287
      );


      // SAVE
      doc.save(

        `PanaiMaram-Invoice-${order._id.slice(-6)}.pdf`
      );
    };


  // EXPORT ALL ORDERS
  const exportBill = () => {

    const doc =
      new jsPDF();

    doc.setFontSize(22);

    doc.text(
      "PANAI MARAM",
      14,
      20
    );

    doc.setFontSize(11);

    doc.text(
      "All Orders Summary",
      14,
      30
    );

    autoTable(doc, {

      startY: 45,

      head: [[

        "Order ID",

        "Products",

        "Items",

        "Total",

        "Payment",
      ]],

      body:
        orders.map(
          (order) => [

            order._id.slice(-6),

            order.orderItems
              .map(
                (item) =>
                  item.title
              )
              .join(", "),

            order.orderItems.length,

            `₹${order.totalPrice}`,

            order.paymentMethod,
          ]
        ),
    });

    doc.save(
      "PanaiMaram-AllOrders.pdf"
    );
  };


  return (

    <section
      className="
        min-h-screen
        bg-[#F5F1EB]
        px-4 sm:px-6 lg:px-20
        py-16
      "
    >

      {/* HEADER */}
      <div
        className="
          flex flex-col lg:flex-row
          items-start lg:items-center
          justify-between
          gap-6
          mb-14
        "
      >

        <div>

          <h1
            className="
              text-5xl
              font-bold
              text-[#904100]
            "
          >

            My Orders

          </h1>

          <p
            className="
              mt-4
              text-[#6B4F3B]
              text-lg
              leading-8
            "
          >

            Track your Panai Maram
            purchases and download
            professional invoices.

          </p>
        </div>


        {
          orders.length > 0 && (

            <button
              onClick={exportBill}

              className="
                flex items-center gap-3
                bg-[#904100]
                hover:bg-[#7A3600]
                text-white
                px-8 py-4
                rounded-2xl
                font-semibold
                transition duration-300
              "
            >

              <Download className="w-5 h-5" />

              Export Orders

            </button>
          )
        }
      </div>


      {/* LOADING */}
      {
        loading && (

          <div
            className="
              bg-white
              rounded-[32px]
              p-12
              text-center
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-[#904100]
              "
            >

              Loading Orders...

            </h2>
          </div>
        )
      }


      {/* EMPTY */}
      {
        !loading &&
        orders.length === 0 && (

          <div
            className="
              bg-white
              rounded-[32px]
              p-14
              text-center
            "
          >

            <Package
              className="
                w-16 h-16
                mx-auto
                text-[#904100]
              "
            />

            <h2
              className="
                mt-6
                text-3xl
                font-bold
                text-[#904100]
              "
            >

              No Orders Found

            </h2>

            <p
              className="
                mt-4
                text-[#7A6855]
                text-lg
              "
            >

              Your orders will appear here after checkout.

            </p>
          </div>
        )
      }


      {/* ORDER LIST */}
      <div className="space-y-8">

        {
          orders.map((order) => (

            <div
              key={order._id}

              className="
                bg-white
                rounded-[32px]
                p-8
                border border-[#EFE2D3]
                shadow-sm
                hover:shadow-xl
                transition duration-300
              "
            >

              {/* TOP */}
              <div
                className="
                  flex flex-col lg:flex-row
                  justify-between
                  gap-10
                "
              >

                {/* LEFT */}
                <div className="flex-1">

                  <div
                    className="
                      inline-flex
                      items-center gap-2
                      bg-[#FFF7ED]
                      text-[#904100]
                      px-4 py-2
                      rounded-full
                      text-sm
                      font-semibold
                      mb-6
                    "
                  >

                    <PackageCheck className="w-4 h-4" />

                    Order Confirmed

                  </div>


                  {/* PRODUCTS */}
                  <div className="space-y-4">

                    {
                      order.orderItems.map(
                        (item, index) => (

                          <div
                            key={index}

                            className="
                              border border-[#EFE2D3]
                              rounded-2xl
                              p-4
                              flex items-center
                              justify-between
                              gap-4
                            "
                          >

                            <div
                              className="
                                flex items-center gap-4
                              "
                            >

                              <img
                                src={item.image}

                                alt={item.title}

                                className="
                                  w-20 h-20
                                  object-cover
                                  rounded-2xl
                                  border
                                "
                              />

                              <div>

                                <h2
                                  className="
                                    text-xl
                                    font-bold
                                    text-[#2D1B12]
                                  "
                                >

                                  {item.title}

                                </h2>

                                <p
                                  className="
                                    text-[#7A6855]
                                    mt-1
                                  "
                                >

                                  Quantity :
                                  {item.quantity}

                                </p>

                                <p
                                  className="
                                    text-[#904100]
                                    font-semibold
                                    mt-1
                                  "
                                >

                                  ₹{item.price}

                                </p>
                              </div>
                            </div>


                            <div
                              className="
                                text-right
                              "
                            >

                              <p
                                className="
                                  text-sm
                                  text-[#8A7A68]
                                "
                              >

                                Total

                              </p>

                              <h3
                                className="
                                  text-2xl
                                  font-bold
                                  text-[#904100]
                                "
                              >

                                ₹
                                {
                                  Number(
                                    item.price.replace(
                                      "₹",
                                      ""
                                    )
                                  ) *

                                  item.quantity
                                }

                              </h3>
                            </div>
                          </div>
                        )
                      )
                    }
                  </div>


                  {/* INFO */}
                  <div
                    className="
                      mt-8
                      grid md:grid-cols-3
                      gap-5
                    "
                  >

                    {/* USER */}
                    <div
                      className="
                        bg-[#F9F5F1]
                        rounded-2xl
                        p-4
                      "
                    >

                      <div
                        className="
                          flex items-center gap-2
                          text-[#904100]
                          mb-2
                        "
                      >

                        <User className="w-4 h-4" />

                        Customer

                      </div>

                      <p
                        className="
                          font-semibold
                          text-[#2D1B12]
                        "
                      >

                        {
                          order.shippingAddress?.fullName
                        }

                      </p>
                    </div>


                    {/* DATE */}
                    <div
                      className="
                        bg-[#F9F5F1]
                        rounded-2xl
                        p-4
                      "
                    >

                      <div
                        className="
                          flex items-center gap-2
                          text-[#904100]
                          mb-2
                        "
                      >

                        <CalendarDays className="w-4 h-4" />

                        Date

                      </div>

                      <p
                        className="
                          font-semibold
                          text-[#2D1B12]
                        "
                      >

                        {
                          new Date(
                            order.createdAt
                          ).toLocaleDateString()
                        }

                      </p>
                    </div>


                    {/* PAYMENT */}
                    <div
                      className="
                        bg-[#F9F5F1]
                        rounded-2xl
                        p-4
                      "
                    >

                      <div
                        className="
                          flex items-center gap-2
                          text-[#904100]
                          mb-2
                        "
                      >

                        <CreditCard className="w-4 h-4" />

                        Payment

                      </div>

                      <p
                        className="
                          font-semibold
                          text-[#2D1B12]
                        "
                      >

                        {
                          order.paymentMethod
                        }

                      </p>
                    </div>
                  </div>
                </div>


                {/* RIGHT */}
                <div
                  className="
                    lg:w-[250px]
                    flex flex-col gap-5
                  "
                >

                  <div
                    className="
                      bg-green-100
                      text-green-700
                      rounded-2xl
                      px-5 py-4
                      text-center
                      font-semibold
                    "
                  >

                    Confirmed

                  </div>

                  <div
                    className="
                      bg-[#FFF7ED]
                      rounded-2xl
                      px-5 py-4
                      flex items-center gap-3
                      text-[#904100]
                      font-semibold
                    "
                  >

                    <Truck className="w-5 h-5" />

                    Tracking Active

                  </div>

                  <div
                    className="
                      bg-[#904100]
                      rounded-3xl
                      p-6
                      text-white
                    "
                  >

                    <p className="text-sm opacity-80">

                      Grand Total

                    </p>

                    <div
                      className="
                        flex items-center gap-1
                        mt-2
                      "
                    >

                      <IndianRupee className="w-7 h-7" />

                      <h2
                        className="
                          text-4xl
                          font-bold
                        "
                      >

                        {order.totalPrice}

                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      downloadBill(order)
                    }

                    className="
                      flex items-center
                      justify-center
                      gap-3
                      bg-[#904100]
                      hover:bg-[#7A3600]
                      text-white
                      px-7 py-4
                      rounded-2xl
                      font-semibold
                      transition duration-300
                    "
                  >

                    <Download className="w-5 h-5" />

                    Download Invoice

                  </button>
                </div>
              </div>


              {/* FOOTER */}
              <div
                className="
                  mt-8
                  pt-6
                  border-t
                "
              >

                <p
                  className="
                    text-sm
                    text-[#8A7A68]
                  "
                >

                  Order ID

                </p>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-[#904100]
                  "
                >

                  {order._id}

                </h3>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default ViewOrders;