import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { 
            name: 'Arto Hellas',
            number: '040-12341456',
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
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
            {persons.map(person =>
                <p key={person.name}>
                    {person.name} {' '} {person.number}
                </p>
            )}
            </div>
        </div>
    )
}

export default App