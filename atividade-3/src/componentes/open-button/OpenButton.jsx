import React, {useState} from "react";
import Modal from "../modal/Modal";

export default () =>{
    const [isModalVisible,setIsModalVisible] = useState(false);

    return(
        <>
        <button onClick={()=> setIsModalVisible(true)}>Open</button>
        {isModalVisible ? 
        <Modal onClose = {()=> setIsModalVisible(false)}>
            <h2>Modal App</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore earum minus voluptatem est cupiditate libero consequuntur rem debitis accusamus quisquam suscipit, tempore dolorem harum qui reiciendis mollitia, ratione aliquam. Fugit!
            </p>
        </Modal>: null}
        </>
    
    )
}