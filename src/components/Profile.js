function Profile(props){
   // console.log(props)
    return <h1>Profile {props.name} {props.last_name}
    {props.children}</h1>
}

export default Profile;