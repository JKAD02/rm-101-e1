import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
let tasksData = require('../data/tasks.json')

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(tasksData)

    const addTask = (task) => {
        setData([...data, task])
    }

    const removeTask = (id) => {
        setData(data.filter((task) => task.id !== id))
    }

    const toggleTask = (id, value) => {
        setData(data.map((task) => task.id === id ? { ...task, done: value } : task))
    }

    const updateTask = (id, value) => {
        setData(data.map((task) => task.id === id ? { ...task, count: value } : task))
    }


    return (
        <DataContext.Provider value={{ data, addTask, removeTask, toggleTask, updateTask }}>
            {children}
        </DataContext.Provider>
    )
}
