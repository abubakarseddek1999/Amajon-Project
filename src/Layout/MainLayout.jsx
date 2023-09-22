import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <section className="flex justify-between p-5 shadow-xl">
                <div>
                    <h2>Amazon</h2>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li>
                            <a href="/">Home</a>

                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </nav>


            </section>

            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>


        </div>
    );
};

export default MainLayout;