export default function CardPopup(){
    return(
        <div className="card_container">
             <div className="pp_head">
                <p>List Actions</p>
                <IoClose />
            </div>
            <p>You don’t have any templates. Create a template to make copying cards easy.</p>
            <button>Create a new template</button>
        </div>
    );
}