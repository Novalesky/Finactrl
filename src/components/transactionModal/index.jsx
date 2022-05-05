import React from 'react'

export default function ModalTransaction({transacInfo}) {
    console.log(transacInfo.value)

    return (
    <div>
        <span>valor{transacInfo.value}</span>
        <span>descrição{transacInfo.description}</span>
        <span>id{transacInfo.id}</span>
    </div>
  )
}
