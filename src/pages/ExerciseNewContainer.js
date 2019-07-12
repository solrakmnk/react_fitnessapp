import React from 'react'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import '../components/styles/ExerciseNew.css'
import url from '../config';

class ExerciseNewContainer extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: false,
        error: null
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try{
            let config ={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json',
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/api/exercises`,    config)
            let json = await res.json()
            console.log(json)
            this.setState({
                loading: false
            })
            this.props.history.push('/exercise')
        }catch(error){
            this.setState({
                loading: true,
                error
            })
        }
    }

    render(){
        if(this.state.error){
            return <FatalError/>
        }
        return <ExerciseNew 
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
        />
    }
}

export default ExerciseNewContainer