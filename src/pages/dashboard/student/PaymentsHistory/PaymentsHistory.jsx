import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";



const PaymentsHistory = () => {


  const [axiosSecure] = useAxiosSecure()
  const { user } = useAuth()
  const [payments, setPayments] = useState([])
  console.log(user)
  console.log(payments)

  useEffect(() => {
    axiosSecure(`/payment-details/${user?.email}`)
      .then(data => {
        console.log(data.data)
        setPayments(data.data)
      })

  }, [axiosSecure, user?.email])




  return (
    <>

<h1 className="text-center font-bold text-sky-600 py-8 text-3xl">Your Payment History</h1>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-800 text-gray-100">#</th>
            <th className="py-2 px-4 bg-gray-800 text-gray-100">Class Name</th>
            <th className="py-2 px-4 bg-gray-800 text-gray-100">Price</th>
            <th className="py-2 px-4 bg-gray-800 text-gray-100">Date</th>
            <th className="py-2 px-4 bg-gray-800 text-gray-100">TransactionId</th>
          </tr>
          </thead>
          <tbody>
          {
            payments.sort( (a,b) => a.date > b.date? -1 : 1).map((payment,index) =>
              <tr key={payment._id} className="shadow-lg rounded-lg overflow-hidden">
                <td className="py-2 px-4 border-b">{index+1}</td>
                <td className="py-2 px-4 border-b">{payment?.courseDetails.className}</td>
                <td className="py-2 px-4 border-b">{payment?.price}</td>
                <td className="py-2 px-4 border-b">{payment?.date}</td>
                <td className="py-2 px-4 border-b">trxId : {payment?.transactionId}</td>
                <td className="py-2 px-4 border-b">{}</td>
                
              </tr>)
          }
          </tbody>
        </table>
      </div>
    </>



  );
};

export default PaymentsHistory;