import PropTypes from 'prop-types';

const Child=({name,age,tab,bestUser:{user},handleAlert,handleName,children,show})=>{
// const Child=(props)=>{
//     console.log(props)
    return(
        <div>
            {/* <h1>Child Component</h1>
            <h2>My name is :{props.name}</h2>
            <h2>My age is : {props.age}</h2>
            <h2>My classmates are :</h2>
            <ul>
                {
                    props.tab.map((el)=> <li>{el}</li>)
                }
            </ul>
            <h2>Best user is : {props.bestUser.user}</h2> */}
            <h1>Child Component</h1>
            <h2>My name is :{name}</h2>
            <h2>My age is : {age}</h2>
            <h2>My classmates are :</h2>
            <ul>
                {
                    tab.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>
            <h2>Best user is : {user}</h2> 
            <button onClick={handleAlert}>Alert</button>
            <br/>
            <br/>
            <button onClick={()=>handleName(name)}>Alert Name</button>
            {/* Children Props */}
            {children}
            {/* Conditional rendering     */}


            {
                show ?  
                <div>
                    <h2>Hachem</h2>
                    <h2>Hachem feded</h2>
                </div> 
                :  
                <button onClick={handleAlert}>Alert</button>
            }    
             


            
        </div>
    )
}


Child.defaultProps={
    name : 'Sahla',
    age : 20000000
}

Child.propTypes = {
    name : PropTypes.number
}


export default Child