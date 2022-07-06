import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    const addName = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to the phonebook`)
            setNewNumber('')
            setNewName('')
            return
        }
        else {
            const nameObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    const filtered = persons.filter(p =>
                     p.name.toLowerCase().includes(newFilter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter: 
                    <input
                        value={newFilter}
                        onChange={handleFilterChange}
                    />
            </div>
            <h2>Add a new contact</h2>
            <form onSubmit={addName}>
                <div>
                    name: 
                        <input
                            value={newName}
                            onChange={handleNameChange}
                        />
                </div>
                <div>
                    number:
                        <input
                            value={newNumber}
                            onChange={handleNumberChange}
                        />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
                
            </form>
            <h2>Numbers</h2>
            <div>
            {filtered.map(person =>
                <p key={person.name}>
                    {person.name} {' '} {person.number}
                </p>
            )}
            </div>
        </div>
    )
}

export default App