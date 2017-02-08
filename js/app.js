
var questions = [
    ["what are React features?",'Reusability' ,'use everywhere','use Once','B'],
    ['reacts create Wrappers of ?','JSX','Javascript','HTML','C'],
    ['Which is a purpose of setState()  ?' ,'update UI','update server','remove Errors','A'],
    ['Who developed React?','microsoft','google','Facebook','C'],
    ['React works like ...??','Javascript','html','angular 2 ','A']

] ;

var  pos = 0, correct = 0 , choice ,percentage;



var quizRender = React.createClass({
      


     getInitialState: function(){
         return{
             correct: this.props.correct,
             pos: this.props.pos,
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
         }
     },
  
     _checkAnswer: function(e){
          choices = document.getElementsByName('answer');
          console.log(choices);
          for (var i = 0; i < choices.length; i++) {
          if(choices[i].checked){
              choice = choices[i].value;
          }
       }
            if(choice == this.props.data[pos][4]){
                this.setState({
                    correct: correct++,
                })
                
            }
          this.setState({
            pos: ++pos,
          }) 
          if(pos < this.props.data.length){
              this.setState({
               
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
            
        })
          }
       
          
        

     },
     _showQuestion: function(){
           
            if(this.state.pos >= this.props.data.length){
               percentage = correct*20;
              return React.DOM.div(
                    {
                        id:'complete'
                    },
                    React.DOM.span({className:'resultBox'},
                      React.DOM.h2(null, "PERCENTAGE"),
                      React.DOM.h2(null, percentage + ' %')
                      ),
                     React.DOM.span({className:'resultBox'},
                      React.DOM.h2(null, "CORRECT ANSWER"),
                      React.DOM.h2(null, correct)
                      )
                 )
             } else {
                
                 return  React.DOM.div(
                         null,
                          React.DOM.div(
                             {
                                 id:'status'
                             },
                            React.DOM.h1(null,"QUESTION "+ (this.state.pos+1) +" OF " +this.props.data.length )
                          ),
                         React.DOM.h4(
                             {
                                 id:'question'
                             }, (this.state.pos+1) +'.  '+this.state.quesion),
                         React.DOM.div(
                             null,
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'A'
                                 }
                             ),
                              this.state.opt1,
                              React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'B'                          
                                 }
                             ),
                             this.state.opt2,
                             React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'C'
                                 }
                             ),
                             this.state.opt3
                         ),
                         React.DOM.button(
                                 {
                                    id:'nextBtn', 
                                    type: "button",
                                    onClick: this._checkAnswer
                                 },
                                 'NEXT'
                             )
                     );
             }
         
                 
     },
     render: function(){
         return React.DOM.div(
             null,
             React.DOM.div( 
                    {
                    id: 'header'
                    },
                    React.DOM.h1(null,"QUIZ GAME OF REACT")
             ),
             React.DOM.div(
                 null,
                
                 React.DOM.div(
                     {
                        id:'test'
                     },
                     this._showQuestion() 
                  )  
             )
         )
     }
});


ReactDOM.render(
    React.DOM.div(
       null,
       React.createElement(quizRender,
       {
           data: questions,
           pos: pos,
           correct: correct,
       }
       )
    ),
    document.getElementById('app')
);