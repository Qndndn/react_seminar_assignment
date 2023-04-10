import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {

  const [Selected, setSelected] = useState("");
  const [topic, setTopic] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState('high');
  const [idnum, setIdnum] = useState(0);

  const saveIdnum = () => {
    setIdnum(idnum+1)
  }

  const saveTopic = (e) => {
    setTopic(e.target.value);
  };

  const saveText = (e) => {
    setText(e.target.value);
  };

  const saveDate = (e) => {
    setDate(e.target.value);
  };
 
  const select = (e) => {
    setSelected(e.target.value);
  };

  const onlyhigh = () => {
    setPriority("high");
  };
  const onlymiddle = () => {
    setPriority("middle");
  };
  const onlylow = () => {
    setPriority("low");
  };


  const remove = (id) => {
    setTodos(todos.filter( todo => todo.id !== id ));
  };

  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos.filter((todo) => todo.priority === priority))
  }, [todos, priority])

  const upload = () => {
    if (!Selected || !topic || !text || !date){
      alert("내용을 모두 입력해주세요")
    }
    else{
      alert("upload 성공");
      setTodos([...todos, {id: idnum, priority: Selected, topic: topic, text: text, date:date}])
    }
  }

  return(
    <div className="App">
      <h3>To-do list</h3>
      중요도<br/>
      <select id='imp' className='App' onChange={select} value={Selected}>
        <option value='' selected>-- 선택 --</option>
        <option value='high'>높음</option>
        <option value='middle'>중간</option>
        <option value='low'>낮음</option>
      </select>

      <br/><br/>제목<br/><input type="topic" id="input_topic" value={topic} onChange={saveTopic}/>
      <br/><br/>내용<br/><input type="text" id="input_text" value={text} onChange={saveText}/>
      <br/><br/>날짜<br/><input type="date" id="date" maxlength="20" value={date} onChange={saveDate}/>
      <br/><br/><button onClick={upload}>upload</button>

      <h3>목록</h3>
      <button onClick={onlyhigh}>high</button>
      <button onClick={onlymiddle}>middle</button>
      <button onClick={onlylow}>low</button>
      
      {filteredTodos.map((todo) => {
        return(
          <div>
            <p>제목: {todo.topic} 내용: {todo.text} 날짜: {todo.date} 중요도: {todo.priority} <button onClick={()=>{remove(todo.id)}}>삭제</button></p>
          </div>
        )
      })}



    </div>
    );
};

export default App;
