import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){
    // should~ 함수는 새로운 props와 이전 props를 사용할수있다.
    if(this.props.data === newProps.data){
      return false;//false이면 render 실행안됨.
    }
    return true;
  }
    render() {
      console.log('Toc render')
      var lists = [];
      var data = this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a>
          </li>)
        i=i+1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC;