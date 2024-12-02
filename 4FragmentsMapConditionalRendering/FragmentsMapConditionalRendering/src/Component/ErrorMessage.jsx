const ErrorMessage = ({Items})=>{
return (
<>
{Items.length===0 && <h3>I am still hungry!!</h3>}
</>
);
}

export default ErrorMessage;

//Yaha ham log props ko destructure kr diye hai {} k andr rakh kr islie ham direct Items.length likh diye hai
 