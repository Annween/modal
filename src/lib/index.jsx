import React, {useEffect} from "react";
import "./modal.css";

const Modal = (props) => {

	const [isModalOpen, setIsModalOpen] = React.useState(false);

	useEffect(() => {

		setIsModalOpen(props.isVisible);
		console.log(props.isVisible)
	}, [props.isVisible]);


	return (
		<>
			{props.displayButton && (
				<button className="openBtn" onClick={() => setIsModalOpen(!isModalOpen)}>
					Open Modal
				</button>
			)}
			{isModalOpen && (
				<div className="modal">
					<div className="modal-content">
						<div className="modal-header">
              <span className="close" onClick={() => setIsModalOpen(!isModalOpen)}>
                &times;
              </span>
							<h2>{props.header}</h2>
						</div>
						<div className="modal-body">
							<p>{props.body}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
