// import React from "react";
// import styles from "./Dialogs.module.css";
// import { NavLink, useParams } from "react-router-dom";

// const DialogItem = (props) => {
//     //props.id
//     let path =  "/dialogs/" + props.id;
//     return <div className={styles.dialog}>
//                     <NavLink to={path}>{props.name}</NavLink>
//                 </div>
// }
// const Message = (props) => {
//     return <div className={styles.dialogs}>{props.messages}</div>
// }
// const Dialogs = () => {
//     const { id } = useParams(); // Получаем ID из URL

//     return (
//         <div className={styles.dialogs}>
//             <div className={styles.dialogsItems}>
//                <DialogItem name ="Исмоил" id ="1"/>
//                 <DialogItem name = "Фирдавс" id="2"/>
//                 <DialogItem name = "Фирӯз" id="3"/>
//                 <DialogItem name = "Шоҳин" id="4"/>
//             </div>
//             <div className={styles.messages}>
//                     <Message messages ="Hi"/>
//                     <Message messages ="How are you"/>             
//                     <Message messages ="Good morning"/>             
//                     <Message messages ="Running"/>             

//             </div>
//         </div>
//     );
// };

// export default Dialogs;

import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};


const Message = (props) => {
    return <div className={styles.dialog}>{props.message}</div>;
};


const Dialogs = () => {

    const dialogsData = [
        { id: "1", name: "Исмоил" },
        { id: "2", name: "Фирдавс" },
        { id: "3", name: "Фирӯз" },
        { id: "4", name: "Шоҳин" },
    ];


    const messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Good morning" },
        { id: 4, message: "Running" },
    ];

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsData.map((dialog) => (
                    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
                ))}
            </div>
            <div className={styles.messages}>
                {messagesData.map((msg) => (
                    <Message key={msg.id} message={msg.message} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
