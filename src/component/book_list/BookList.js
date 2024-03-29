import Book from "./../book/Book";

export function BookList({ books}) {
    if (books.length === 0){
        return <h1>No books</h1>

    }
    
    return(
        <div>
            {books.map(i => <Book key={i.id} bookProps={i} />)}

        </div>
    )
};