import './Horario.css';
import { useEffect, useState } from 'react';
import { apiKey, spreedID } from '../../api/googleapis';

function Horario() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isOk, setIsOk] = useState(false);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const [avaliability, setAvaliability] = useState({
    "L": [],
    "M": [],
    "X": [],
    "J": [],
    "V": [],
    "S": [],
  });

  const preprocessData = (data) => {
    // Asegúrate de que cada fila tenga 7 elementos
    data.forEach(row => {
      if (row.length === 5) {
        row.push(" ");
        row.push(" ");
      }
    });

    // Asignar los valores de la primera fila a los días de la semana

    let firstRow = data[0];
    const days = firstRow.slice(1, 7).map(day => day[0]);
    setDays(days);
    
    const nrows = data.length;
    const ncols = data[0].length;
    const newData = {
      "L": [],
      "M": [],
      "X": [],
      "J": [],
      "V": [],
      "S": [],
    };

    setHours(data.slice(1, nrows).map(row => row[0]));

    // Procesar los datos y asignarlos a newData
    for (let i = 1; i < nrows; i++) {
      for (let j = 1; j < ncols; j++) {
        let cell = data[i][j];

        // Manejar valores específicos
        switch (cell) {
          case "No Disponible":
            cell = "ND";
            break;
          case "Disponible":
            cell = "D";
            break;
          case "Ocupado":
            cell = "O";
            break;
          default:
            cell = "X";
            break;
        }

        // Asignar los valores a los días correspondientes
        if (j === 1) newData["L"].push(cell);
        if (j === 2) newData["M"].push(cell);
        if (j === 3) newData["X"].push(cell);
        if (j === 4) newData["J"].push(cell);
        if (j === 5) newData["V"].push(cell);
        if (j === 6) newData["S"].push(cell);
      }
    }
    setAvaliability(newData);
  };

  useEffect(() => {
    // Realizar la solicitud GET
    const range = "C10:I22";
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreedID}/values/${range}?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Obteniendo datos ... ");
        const values = data.values;
        preprocessData(values);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      })
      .finally(() => {
        console.log("Datos cargados");
        setIsOk(true);
      });

      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreedID}/values/C6:I7?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const values = data.values;
        setTitle(values[0][0]);
        setSubtitle(values[1][0]);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      })
      .finally(() => {
        console.log("Datos cargados");
        setIsOk(true);
      });
  }, [spreedID, apiKey]);

  if (!isOk) {
    return <p className='downloading'>Cargando ... </p>;
  }

  return (
    <>
    <h2 id='title' style={{textAlign: 'center'}}>{title}</h2>
    <p id='subtitle' style={{textAlign: 'center'}}>{subtitle}</p>
    <div className='legends'>
      <span>
        <span className='circle D'></span><p>Disponible</p>
      </span>
      <span>
        <span className='circle ND'></span><p>No disponible</p>
      </span>
    </div>
    
    <div className="horario">
      <table>
        <thead>
          <tr>
            <th></th>
            {days.map((day, index) => (
              <th className='hora' key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {hours.map((hour, rowIndex) => (
            <tr key={rowIndex}>
              <td id='hour'>{hour}</td>
              {Object.keys(avaliability).map((dayKey, colIndex) => (
                <td className={avaliability[dayKey][rowIndex]} key={colIndex}>{avaliability[dayKey][rowIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  );
}

export default Horario;