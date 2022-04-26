import React, {useState} from "react";
import { BsHandbag } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import "./styles.css";

export default function SelectType(){
    const [open,setOpen] = useState(false);

    function handleClick(){
        setOpen(!open);
    }

    return(
        <div className="select-type-container">
            <button className={`select-type ${open && "open"}`}onClick={handleClick}>
                <div>
                <BsHandbag />
                test
                </div>
                <AiFillCaretDown />
            </button>

            {open &&(
                <ClickAwayListener onClickAway={handleClick}>

                <div className="type-list">
                    <div className="type-list-item">
                    <BsHandbag />
                        test
                    </div>

                    <div className="type-list-item">
                    <BsHandbag />
                        test
                    </div>

                    <div className="type-list-item">
                    <BsHandbag />
                        test
                    </div>

                    <div className="type-list-item">
                    <BsHandbag />
                        test
                    </div>
                </div>

                </ClickAwayListener>

            )}
        </div>
    )
}