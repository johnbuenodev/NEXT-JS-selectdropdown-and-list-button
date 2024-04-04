"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from 'react'

interface dataWeb {
  value: string,
  label: string
}

export default function Home() {

  const [valuesDrop, setValuesDrop] = useState<any[]>([
    
  {
    value: "1",
    label: "Analfabeto"
  },
  {
    value: "2",
    label: "Até 5º ano incompleto"
  },
  {
    value: "3",
    label: "5º ano completo"
  },
  {
    value: "4",
    label: "6º ao 9º ano do fundamental"
  },
  {
    value: "5",
    label: "Fundamental incompleto"
  },
  {
    value: "6",
    label: "Fundamental completo"
  },
  {
    value: "7",
    label: "Ensino médio incompleto"
  },
  {
    value: "8",
    label: "Ensino médio completo"
  },
  {
    value: "9",
    label: "Ensino sup. incompleto"
  },
  {
    value: "10",
    label: "Ensino sup. completo"
  },
  {
    value: "11",
    label: "Pós graduaduação"
  },
  {
    value: "12",
    label: "MBI"
  },
  {
    value: "13",
    label: "Mestrado"
  },
  {
    value: "14",
    label: "Doutorado"
  } 

  ]);
  const [valuesButtom, setValuesButtom] = useState<any[]>([
      {
        value: "0",
        label: "Cursando"
      },
      {
        value: "1",
        label: "Concluído"
      },
      {
        value: "2",
        label: "Incompleto"
      }
    ]);
  const [selectDrop, setSelectDrop] = useState<any>();
  const [selectButtom, setSelectButton] = useState<any>();


 
  function handleSelect(event: any) {
    console.log(event);
    console.log(event.target.value);
    setSelectDrop(event.target.value);


    if (event.target.value === '1') {
      console.log("Analfabeto");
      setSelectButton(
      {
        value: -1
      });
    } else if (['2', '5', '7', '9'].includes(event.target.value)) {
      console.log("incompleto");
      setSelectButton(
      {
          value: "2",
          label: "Incompleto"
      });
      
    } else if (['3', '6', '8', '10', '4', '11', '12', '13', '14'].includes(event.target.value)) {
      console.log("concluido");
      setSelectButton(
      {
          value: "1",
          label: "Concluído"
      });
    }

  }

  function handleSelect2(event: dataWeb) {

    console.log(event.value);
    console.log(event.label);
    setSelectButton(
      {
          value: event.value,
          label: event.label
      });

  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div style={{ width:'40%', margin: '8px', backgroundColor: '#4169E1' }}>
          <h4>Escolha a Categoria</h4>
          <select className="form-select" style={{ width: '100%' }} onChange={handleSelect}>
            <option>--Escolha--</option>
            {
              valuesDrop && valuesDrop.map((optionValue: any) => {
               return <option key={optionValue.value} value={optionValue.value}>{optionValue.label}</option>
              })
            } 
          </select>
        </div>
        <div style={{ width:'60%', height: 80, margin: '8px', backgroundColor: '#4169E1' }}>
          <h4 style={{ marginBottom:16 }}>Escolha:</h4>
             <>
            {
              valuesButtom && valuesButtom.map((optionValue: any) => {
               return (<label key={optionValue.value} onChange={() => handleSelect2(optionValue)} style={(optionValue?.value == selectButtom?.value && selectButtom?.value != -1) ? { borderWidth:1,color:"#ffffff",borderRadius:16,backgroundColor:'#4169E1', borderColor:"#000000",borderStyle:"solid", paddingLeft:16,paddingRight:16,paddingTop:8,paddingBottom:8 }: { borderWidth:1,color:"#ffffff",borderRadius:16,backgroundColor:'#D3D3D3', borderColor:"#000000",borderStyle:"solid", paddingLeft:16,paddingRight:16,paddingTop:8,paddingBottom:8 } }>
                        <input style={{ appearance:"none" }} type="radio" value={optionValue} checked={optionValue?.value == selectButtom?.value} disabled={selectButtom?.value == -1}/> 
                        {optionValue.label}
                      </label>)
              })
            } 
            </>
        </div>
      </div>

    </main>
  );
}
