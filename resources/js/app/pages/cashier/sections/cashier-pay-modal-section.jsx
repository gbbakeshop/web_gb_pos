import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { changeTenders, setIsPrint } from '../redux/cashier-slice';
import store from '../../../../store/store';
import { createPaymentThunk } from '../redux/cashier-thunk';

export default function CashierPayModalSection() {
  const [open, setOpen] = useState(false)
  const { payment } = useSelector((state) => state.cashier);
  const { user } = useSelector((state) => state.app);
  const cancelButtonRef = useRef(null)
  const dispatch = useDispatch()
  const [autoFocus, setAutoFucos] = useState(true)

  async function acceptPayment(e) {
    e.preventDefault()
    if (!isSubmit()) {
      await store.dispatch(createPaymentThunk())

      setOpen(false)
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.key === 'F' || event.key === 'f') && autoFocus) {
        // If 'F' key is pressed and autofocus prop is true
        setAutoFucos(true)
        document.getElementById('paymentDetails').focus();
      } else if ((event.key === 'C' || event.key === 'c')) {
        // If 'F' key is pressed and autofocus prop is true
        setOpen(false)
        document.getElementById('paymentDetails').focus();
      }else if ((event.key === 'P' || event.key === 'p')) {
        // If 'F' key is pressed and autofocus prop is true
        setOpen(true)
        setTimeout(() => {
          setAutoFucos(true)
          document.getElementById('paymentDetails').focus();
        }, 500);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [autoFocus]);

  function isSubmit() {
    if (payment.tenders < 0) {
      return true;
    } else if (payment.tenders <= 0) {
      return true;
    } else if (payment.change < 0) {
      return true;
    } else if (payment.total == 0) {
      return true;
    }
    return false
  }
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className='w-full hover:bg-red-400 bg-red-500 p-4 text-lg font-black text-white flex items-center justify-center'>
        PAY
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <form
                    onSubmit={acceptPayment}
                    className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Payment Details
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="relative overflow-x-auto">
                            <table className="w-full text-sm  ">

                              <tbody>
                                <tr className="bg-white border-b ">
                                  <th scope="row" className=" py-2 font-medium text-gray-900">
                                    Subtotal:
                                  </th>
                                  <td className="px-6 py-2 font-bold text-gray-900">
                                    ₱ {payment.subtotal}
                                  </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                  <th scope="row" className=" py-2 font-medium text-gray-900">
                                    Discount:
                                  </th>
                                  <td className="px-6 py-2 font-bold text-gray-900">
                                    {parseFloat(payment.discount) * 100}%
                                  </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                  <th scope="row" className=" py-2 font-medium text-gray-900">
                                    Tax:
                                  </th>
                                  <td className="px-6 py-2 font-bold text-gray-900">
                                    ₱ {payment.tax}
                                  </td>

                                </tr>
                                <tr className="bg-white border-b ">
                                  <th scope="row" className=" py-2 font-medium text-gray-900">
                                    Total:
                                  </th>
                                  <td className="px-6 py-2 font-bold text-gray-900">
                                    ₱ {payment.total}
                                  </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                  <th scope="row" className=" py-2 font-medium text-gray-900">
                                    Tenders:
                                  </th>
                                  <td className="px-6 py-2 font-bold text-gray-900">
                                    <input
                                      autoFocus={autoFocus}
                                      value={payment.tenders == 0 ? '' : payment.tenders}
                                      onChange={(e) => dispatch(changeTenders({
                                        value:e.target.value,
                                        cashier_id:user.id
                                      }))}
                                      type="text"
                                      id="paymentDetails"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                  </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                  <th scope="row" className=" py-2 font-medium text-gray-900">
                                    Change:
                                  </th>
                                  <td className="px-6 py-2 font-bold text-gray-900">
                                    ₱ {payment.change}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      disabled={isSubmit()}
                      type="submit"
                      className={`inline-flex w-full justify-center rounded-md ${isSubmit() ? 'bg-red-300' : 'bg-red-600 hover:bg-red-500'}  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto`}
                      onClick={acceptPayment}
                    >
                      Confirm Payment
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>

  )
}
