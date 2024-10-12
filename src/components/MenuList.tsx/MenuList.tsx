import React from 'react'

const MenuList = () => {
  return (
    <ul>
        <li>Home</li>
        <li>Conocimientos</li>
        <li>Proyectos</li>
        <li>Contacto</li>
        <li>
            <select className='language-select'>
                <option value="english"> English</option>
                <option value="spanish"> Español </option>
            </select>
        </li>
    </ul>
  )
}

export default MenuList