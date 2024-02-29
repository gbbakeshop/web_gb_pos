import { setToastStatus } from "../redux/app-slice";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toastify() {
    const toastId = React.useRef(null);
    const { toastStatus } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        if (toastStatus.status !== "waiting") {
            if (toastStatus.status == "loading") {
                showToast("Loading ...", "loading");
            } else if (toastStatus.status == "success") {
                showToast(toastStatus.message, "success");
            } else if (toastStatus.status == "exist") {
                showToast(toastStatus.message, "warning");
            } else {
                showToast(toastStatus.message, "error");
            }
        }
    }, [toastStatus.status]);

    function showToast(message, type) {
        const id = toast.loading("Loading ...", {
            toastId: "id",
            position: "top-center",
        });

        if (type !== "loading") {
            toast.update(id, {
                render: message,
                autoClose: 1000,
                type: type,
                isLoading: false,
            });
            setTimeout(() => {
                dispatch(
                    setToastStatus({
                        status: "waiting",
                        message: "",
                    })
                );
            }, 1500);
        }
    }

    return (
        <>
            <ToastContainer />
        </>
    );
}
