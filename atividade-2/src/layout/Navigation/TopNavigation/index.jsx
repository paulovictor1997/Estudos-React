import React from "react";
import Logo from './Logo';
import SelecType from './SelectType';
import CustomButton from '../../../Components/Button';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import './styles.css';

export default function TopNavigation(){
    return(
        <div className="top-navigation">
            <AppBar>
                <Toolbar>
                    <Logo />
                    <SelecType />

                    <ul>
                        <li>
                        <a href="#">Shops</a>
                        </li>

                        <li>
                        <a href="#">Offers</a>
                        </li>

                        <li>
                        <a href="#">FAQ</a>
                        </li>

                        <li>
                        <a href="#">Contact</a>
                        </li>

                        <li>
                        <CustomButton text="Become a Seller" color="primary" />
                        </li>
                        <li>
                        <CustomButton text="Join" color="primary" />
                        </li>
                 </ul>
                </Toolbar>
            </AppBar>
        </div>
    )
}