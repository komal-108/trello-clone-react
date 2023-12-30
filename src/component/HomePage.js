import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { BiSolidBookContent } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import HomePopup from "./homePopup";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import InputPopupComponent from "./inputPopup";
export default function Home() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [dragging, setDragging] = useState(false);

  const dragStart = (e, position) => {
    dragItem.current = position;
    setDragging(true);
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
    setDragging(true);
  };
  const drop = (e) => {
    setDragging(false);
    const copyTaskName = [...taskName];
    const dragItemContent = copyTaskName[dragItem.current];
    copyTaskName.splice(dragItem.current, 1);
    copyTaskName.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTaskName(copyTaskName);
  };
  const [commonPopup, setCommonPopup] = useState(false);
  const [addCard, setAddCard] = useState(false);
  // const [addList, setAddList] = useState(false);
  const [editId, setEditId] = useState(null);

  const [todo, setTodo] = useState("");
  const [card, setCard] = useState("");
  const [cardName, setCardName] = useState([]);
  const [taskName, setTaskName] = useState([
    {
      title: "Done",
      card: "Add a card",
      id: 0,
      cards: [],
    },
    {
      title: "Doing",
      card: "Add a card",
      id: 1,
      cards: [],
    },
    {
      title: "To do",
      card: "Add a card",
      id: 2,
      cards: [],
    },
  ]);
  const [list, setList] = useState([]);
  const [inputPopup, setInputPopup] = useState(false);
  const [showAddInput, setShowAddInput] = useState(false);
  function handleCommonPopup() {
    setCommonPopup(!commonPopup);
  }
  function handleAddList() {
    setShowAddInput(!showAddInput);
  }

  const [selectedItem, setSelectedItem] = useState(null);

  function handleAddCard(index) {
    setSelectedItem(index);
    // setAddCard(!addCard);
  }

  function handleToDo() {
    if (todo === "") {
    } else {
      setTaskName([
        ...taskName,
        {
          title: todo,
          card: "Add To Card",
          id: taskName.length,
          cards: cardName,
        },
      ]);
      setTodo("");
    }
  }
  function handleCardList(index) {
    if (card === "") {
      return;
    }
    const updatedTask = [...taskName];
    updatedTask[index].cards.push(card);
    setTaskName(updatedTask);
    setCard("");
  }
  function handleInputPopup() {
    setInputPopup(!inputPopup);
  }

  return (
    <div className="home_main">
      <div className="list-container">
        {taskName.map((item, index) => (
          <div
            className="item-container"
            draggable
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
          >
            <div className="home_div">
              <div className="task_list">
                <div
                  className={`drop-area added_list ${
                    dragging ? "drag-over" : ""
                  }`}
                >
                  <div className="head">
                    <p>{item.title}</p>
                    <BsThreeDots onClick={handleCommonPopup} />
                  </div>
                  <div className="dfghjkl;">
                    {item.cards.map((cardItem) => (
                      <>
                        <div onClick={handleInputPopup}>
                          <li className="card_items">{cardItem}</li>
                        </div>
                        {inputPopup ? (
                          <InputPopupComponent
                            cardItem={cardItem}
                            setInputPopup={setInputPopup}
                          />
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </div>
                  <div>
                    {selectedItem === index ? (
                      <div className=" add_card_pp">
                        <textarea
                          placeholder="Enter a title for this card..."
                          value={card}
                          onChange={(e) => setCard(e.target.value)}
                        ></textarea>
                        <div className="add_footer">
                          <button
                            className="add_card_btn"
                            onClick={() => handleCardList(index)}
                          >
                            Add Card
                          </button>
                          <IoClose
                            className="close_btn"
                            onClick={handleAddCard}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="down">
                        <div
                          className="down_left"
                          onClick={() => handleAddCard(index)}
                        >
                          <AiOutlinePlus />
                          <p>{item.card}</p>
                        </div>
                        <div className="down_right">
                          <BiSolidBookContent />
                        </div>
                      </div>
                    )}

                    {/* {addCard ? (
                                ""
                              ) : (
                                
                              )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="task_list">
        {showAddInput ? (
          <div className="add_list_popup">
            <input
              placeholder="Enter list title..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            ></input>
            <div className="add_footer">
              <button onClick={handleToDo} className="add_card_btn">
                Add list
              </button>
              <IoClose onClick={handleAddList} className="close_btn" />
            </div>
          </div>
        ) : (
          <div className="add_list" onClick={handleAddList}>
            <FaPlus />
            <p>Add another list</p>
          </div>
        )}
      </div>
    </div>
  );
}

{
  /* {commonPopup && <HomePopup closePopup={handleCommonPopup} />} */
}
{
  /* {taskName.length > 0 &&
            taskName.map((item) => (
              <div className="task_list">
                <div className="added_list">
                  <div className="head">
                    <input
                      value={item}
                      onChange={(e) => setTaskName(e.target.value)}
                      className="list_input"
                    ></input>
                    <BsThreeDots />
                  </div>
                  <div className="down">
                    <div className="down_left">
                      <AiOutlinePlus />
                      <p>{item.card}</p>
                    </div>
                    <div className="down_right">
                      <BiSolidBookContent />
                    </div>
                  </div>
                </div>
              </div>
            ))} */
}
{
  /* <div className="task_list">
            {showAddInput ? (
              <div className="add_list_popup">
                <input
                  placeholder="Enter list title..."
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                ></input>
                <div className="add_footer">
                  <button onClick={handleToDo}>Add list</button>
                  <IoClose onClick={handleAddList} className="close_btn" />
                </div>
              </div>
            ) : (
              <div className="add_list" onClick={handleAddList}>
                <FaPlus />
                <p>Add another list</p>
              </div>
            )}
          </div> */
}

{
  /* <div className="task_list">
            <div className="added_list">
              <div className="head">
                <p>{item.title}</p>
                <BsThreeDots onClick={handleCommonPopup} />
              </div>
              <div className="down">
                <div className="down_left">
                  <AiOutlinePlus />
                  <p>{item.card}</p>
                </div>
                <div className="down_right">
                  <BiSolidBookContent />
                </div>
              </div>
            </div>
          </div>
          <div className="task_list">
            <div className="added_list">
              <div className="head">
                <p>{item.title}</p>
                <BsThreeDots onClick={handleCommonPopup} />
              </div>
              <div className="mid">
                <div>
                  <button className="todo_button">Project Planning</button>
                </div>
                <div>
                  <button className="todo_button">Kickoff meeting</button>
                </div>
              </div>
              <div className="down">
                <div className="down_left">
                  <AiOutlinePlus />
                  <p>{item.card}</p>
                </div>
                <div className="down_right">
                  <BiSolidBookContent />
                </div>
              </div>
            </div>
          </div> */
}
