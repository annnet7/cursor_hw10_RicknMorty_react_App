import React, {Component} from 'react';
import Card from './characters.view';
import axios from 'axios';



class Character extends Component {
    
    render () {
        return (
            <Card.Wrapper>
                <Card.LabelTxt>Name: </Card.LabelTxt>
                <Card.CharacterDescription>{this.props.name}</Card.CharacterDescription>
                <Card.LabelTxt>Status:</Card.LabelTxt>
                <Card.CharacterDescription>{this.props.status}</Card.CharacterDescription>
                <Card.LabelTxt>Species:</Card.LabelTxt>
                <Card.CharacterDescription>{this.props.species}</Card.CharacterDescription>
                <Card.LabelTxt>Gender:</Card.LabelTxt>
                <Card.CharacterDescription>{this.props.gender}</Card.CharacterDescription>   
                <Card.CharacterPicture link={this.props.image}></Card.CharacterPicture>
            </Card.Wrapper>
        );
    }
}

class CharacterList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          users: '',
          page: 0,
          countOnPage: 9,
          nextPageExist:true,
          isLoadind: true          
        }
       this.getToUsers()
    }
    prevPage = async () => {
        if(this.state.page>0) {
          console.log(this.state.page);
          await this.setState({page: (this.state.page - 1)});        
          this.getToUsers();    
        
      }
    }
    nextPage = async () => {
      console.log(this.state.page);        
      await this.setState({page: (this.state.page + 1)});        
      this.getToUsers();
    }
    getToUsers = async () => {            
        let characterNum = '';         
        let pageStep =  this.state.page * this.state.countOnPage;  
        for(let i=1; i<=this.state.countOnPage;i++)    
        {
            characterNum +=i + pageStep + ",";
        }
        //console.log(characterNum);
       
        if(!this.state.isLoadind) {
          await this.setState({ isLoadind: true});
        }
        

        axios.get(`https://rickandmortyapi.com/api/character/`+characterNum)              
        .then(({data}) => {          
          this.setState({users: data, isLoadind: false})
          //console.log(data);
          if(data.length<this.state.countOnPage) this.setState({nextPageExist:false})
          else this.setState({nextPageExist:true})
        })
        
      }
      
      render() {
          return(
            <Card.CardWrapper>
              {this.state.users ?
                this.state.users.map(user =>               
                      <Character {...user}  key={user.id}/>             
                  
                ) : ''
              }
              <Card.Wrapper> 
                <Card.PageCtrl  onClick={this.prevPage} disabled={(this.state.page===0)}>Prev</Card.PageCtrl>
                <Card.PageCtrl  onClick={this.nextPage} disabled={!this.state.nextPageExist}>Next</Card.PageCtrl>            
              </Card.Wrapper>
              <Card.LoadingText showLoad={this.state.isLoadind}>Loading...</Card.LoadingText>
            </Card.CardWrapper>
          )
        }
}

export default CharacterList;