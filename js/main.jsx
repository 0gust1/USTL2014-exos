
var data =   {
      name:"nom de la liste",
      tasks:[
          {
              content:"Finir le TP",
              done:false
          },
          {
              content:"Nourrir le poisson rouge",
              done:true
          }
      ]
};


var TodoApp = React.createClass({
    addTask:function(task){
        var newState = this.state;
        newState.tasks.push({content:task.content,done:false});
        this.setState(newState);
    },
    toggleTask:function(index){
        var newState = this.state;
        newState.tasks[index].done = !newState.tasks[index].done;
        this.setState(newState);
    },
    deleteTask:function(index){
        var newState = this.state;
        newState.tasks.splice(index, 1);
        this.setState(newState);
    },
    getInitialState: function() {
    return {name:"nom de la liste",
      tasks:[
          {
              content:"Finir le TP",
              done:false
          },
          {
              content:"Nourrir le poisson rouge",
              done:true
          }
      ]};
  },
  render: function() {
    return (

      <section>

        <TaskEntry handleChange={this.addTask}/>

        <TaskList tasks={this.state.tasks} onCheck={this.toggleTask} onSuppress={this.deleteTask}/>

      </section>
    )
  }
});

var TaskEntry = React.createClass({

  handleChange:function(e){

    if (e.which !== 13) {
    return;
    }

    var title = e.target.value;
    if(title){
        this.props.handleChange({content:title});
        this.refs.taskEntry.getDOMNode().value ='';

    }

  },
  render: function() {

    return (
      <div className="create-entry">
                <input type="text"
                        id="create-task"
                        ref="taskEntry"
                        name=""
                        placeholder="Des choses à faire ?"
                        onKeyDown={this.handleChange}
                        autoFocus={true}
                />
      </div>
    )
  }
});

var TaskList = React.createClass({
  getRemainingTasks:function(){
    return this.props.tasks.reduce(function(previous, task){return task.done?previous:previous+1},0);
  },
  render: function() {
    var handlerCheck = this.props.onCheck;
    var handlerSupp = this.props.onSuppress;
    var tasks = this.props.tasks.map(function(task, index){
      return(
          <Task task={task} onCheck={handlerCheck} onSuppress={handlerSupp} index={index} >{task.content}</Task>
        );
    });

    return (
      <div className="task-list">
        {tasks}
         <p className="total">Nombre de tâches restantes : {this.getRemainingTasks()}</p>
         <p className="total">Nombre de tâches : {tasks.length}</p>
      </div>

    )
  }
});

var Task = React.createClass({
  handleChange: function(e){
    this.props.onCheck(this.props.index);
  },
  handleSuppress: function(e){
    this.props.onSuppress(this.props.index);
  },
  render: function() {
     var cx = React.addons.classSet;
     var classes = cx({
        'task-list__item':true,
        'task-list__item--done': this.props.task.done
      });
    return (
      <div className={classes}>
          <input type="checkbox" className="done-chkbx" checked={this.props.task.done} onChange={this.handleChange}/>
          <div className='item-content'>{this.props.children}</div>
          <button type="button" className="suppress-btn" onClick={this.handleSuppress} >X</button>
      </div>
    )
  }
});

React.render(
  <TodoApp model={data}/>,
  document.getElementById('todo-app')
);
