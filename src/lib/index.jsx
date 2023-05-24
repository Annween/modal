import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

const Modal = (props) => {

	const [isModalOpen, setIsModalOpen] = React.useState(false);

	return <>
		{props.button && <button className={"openBtn"} onClick={() => setIsModalOpen(!isModalOpen)}>Open Modal</button>}
		{isModalOpen && <div className="modal">

		<div className="modal-content">
		<div className="modal-header">
			<span className="close" onClick={() => setIsModalOpen(!isModalOpen)}>&times;</span>
			<h2>{props.header}</h2>
		</div>
		<div className="modal-body">
			<p>{props.body}</p>
		</div>
	</div>
		</div>
		}
	</>;
}

export default Modal;
Modal.propTypes = {
	button: PropTypes.bool,
	header: PropTypes.string,
	body: PropTypes.string
}
