


export default function Main() {
    fetch("https://opentdb.com/api.php?amount=5&category=11&difficulty=hard&type=multiple")
     .then((response) => response.json())
     .then((data) => console.log(data));
    return (
        <div className="main"></div>
    )
}
