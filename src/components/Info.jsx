export function Info() {
    return (
        <>
            <div className="social d-flex justify-content-between px-5 fixed-bottom pb-5 align-items-center">
                <div className="position-relative share-div">
                <div className="follow list-unstyled d-flex m-0 flex-column social-hover">
                    <a href="https://www.instagram.com/muhammadshujaat56/" className="my-1 ps-1 text-light text-decoration-none">Instagram</a>
                    <a href="https://www.linkedin.com/in/muhammad-shujaat-847454257/" className="my-1 mx-1 text-light text-decoration-none">Linkedin</a>
                    <a href="https://www.facebook.com/muhammad.shujaat.5243/" className="my-1 mx-1 text-light text-decoration-none">Facebook</a>
                </div>
                    <span className="material-symbols-outlined share-icon fs-5 border border-1 rounded-circle text-light h-100">
                        share
                    </span>
                </div>

                <div className="d-flex align-items-end">
                <span className="social-child-span text-light info-anim">Made by : Muhammad Shujaat</span>
                </div>
            </div>
        </>
    )
}