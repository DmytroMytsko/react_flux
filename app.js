var CommentBox1 = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
            Hello, world! I am a CommentBox.
        </div>
        );
    }
});
ReactDOM.render(
    <CommentBox1 />,
    document.getElementById('example1')
);

var CommentBox2 = React.createClass({
        displayName: 'CommentBox2',
        render: function(){
            return (
                React.createElement(
                    'div',
                    {className: "commentBox"},
                    "Hello, world! I am a CommentBox."
                )
            )
        }
    });

ReactDOM.render(
    React.createElement(CommentBox2, null),
    document.getElementById('example2')
);

var CommentList = React.createClass({
        render: function() {
            return (
                <div className="commentList">
                    Hello, world! I am a CommentList.
                </div>
            )
        }
    });

var CommentForm = React.createClass({
        render: function() {
            return (
                <div className="commentForm">
                    Hello. world!I am a CommentForm
                </div>
            )
        }
    });

var CommentBox3 = React.createClass({
        render: function() {
            return (
                <div className="commentBox3">
                    <h1>Comments</h1>
                    <CommentList />
                    <CommentForm />
                </div>
            )
        }
    });

ReactDOM.render(
  <CommentBox3 />,
    document.getElementById('example3')
);

var CommentBox4 =React.createClass({
        render: function() {
            return (
                <div className="comment">
                    <h2 className="commentAuthor">
                        {this.props.author}
                    </h2>
                    {this.props.children}
                </div>
            )
        }
    });

var CommentList4 = React.createClass({
        render: function() {
            return (
                <div className="commentList">
                    <CommentBox4 author="Pete Hunt">This is one coment</CommentBox4>
                    <CommentBox4 author="Jordan Walke">This is *another* comment</CommentBox4>
                </div>
            );
        }
    });

ReactDOM.render(
    <CommentList4 />,
    document.getElementById('example4')
);