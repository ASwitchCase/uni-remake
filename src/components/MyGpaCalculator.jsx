import React, {useEffect ,useState } from 'react'

const MyGpaCalculator = () => {
    const[subject,setSubject] = useState('');
    const[credits,setCredits] = useState(0);
    const[grade,setGrade] = useState('A');
    const[glist,setGlist] = useState([]);
    const[gpa,setGpa] = useState(0); 

    useEffect(()=>{
        handleCalc(glist);

    },[glist]);

    

    const handleAdd = () =>{
        setGlist([...glist,{subject:subject,credits:credits,grade:grade}])
    }

    const handleCalc = (glist) =>{
        let total = 0;
        let totalCredits =0;

        for(let i = 0; i< glist.length;i++){
            total = total + (glist[i].credits * getPoints(glist[i].grade));
            totalCredits = totalCredits + glist[i].credits;
        }

        let myGpa = total/totalCredits;

        setGpa(myGpa.toFixed(2));
    }

    const getPoints = (letter) =>{
        letter = letter.toUpperCase();

        if(letter === 'A'){
            return 4;
        }else if(letter === 'B'){
            return 3;
        }else if(letter === 'C'){
            return 2;
        }else if(letter === 'D'){
            return 1;
        }else if(letter === 'F'){
            return 0;
        }else{
            return 0;
        }
    }

  return (
    <React.Fragment>
        <div className='contentBox' style={{overflowY:'scroll'}}>
            <h1>My Gpa Calculator</h1>
            <table>
            <tbody>
                <tr>
                    <th>Subject</th>
                    <th>Credits</th>
                    <th>Grade</th>
                </tr>

                <tr>
                    <td><input onChange={(e) => setSubject(e.target.value)}type={'text'}></input></td>
                    <td><input onChange={(e) => setCredits(parseInt(e.target.value))}type={'text'}></input></td>
                    <td><input onChange={(e) => setGrade(e.target.value)}type={'text'}></input></td>
                </tr>

                <tr>
                    <td></td>
                    <td><button>Clear</button></td>
                    <td><button onClick={handleAdd}>Add</button></td>
                </tr>
            </tbody>
            </table>

            <h2>Cumulative GPA: {gpa}</h2>
            <table style={{marginTop:'10px'}}>
                <tbody>
                {glist.map(grade => 
                    <tr key={grade.subject}>
                        <td>{grade.subject}</td>
                        <td>{grade.credits}</td>
                        <td>{grade.grade}</td>
                    </tr>
                    
                )}
                </tbody>
            </table>
        </div>
    </React.Fragment>
  )
}

export default MyGpaCalculator
