import "./Modal.scss";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void; 
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        <div className="modal">
            <div className="modal__content">
                {/* Bouton de fermeture */}
                <i className="fa-solid fa-x modal__close" onClick={onClose}></i>
                {children}
            </div>
        </div>
    );
};

export default Modal;
