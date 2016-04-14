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

var Comment5 = React.createClass({
        render: function() {
            return (
                <div className="comment">
                    <h2 className="commentAuthor">
                        {this.props.author}
                    </h2>
                    {marked(this.props.children.toString())}
                </div>
            )
        }
    });
var CommentList5 = React.createClass({
       render: function() {
           return (
               <div className="commentList5">
                   <Comment5 author="author5" >This is 5 comment</Comment5>
               </div>
           )
       }
    });
var CommentBox5 = React.createClass({
        render: function() {
            return (
                <div className="commentBox5">
                    <h1>Comments</h1>
                    <CommentList5 />
                </div>
            )
        }
    });

ReactDOM.render(
    <CommentBox5 />,
        document.getElementById('example5')
);

var Comment6 = React.createClass({
        rawMarkup: function() {
            var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
            return { __html: rawMarkup};
        },
        render: function() {
            return (
                <div className="comment">
                    <h2 className="commentAuthor">
                        {this.props.author}
                    </h2>
                    <span dangerouslySetInnerHTML={this.rawMarkup()} />
                </div>
            )
        }
    });
var CommentList6 = React.createClass({
    render: function() {
        return (
            <div className="commentList6">
                <Comment6 author="author6" >This is 6 comment</Comment6>
            </div>
        )
    }
});
var CommentBox6 = React.createClass({
    render: function() {
        return (
            <div className="commentBox5">
                <h1>Comments</h1>
                <CommentList6 />
            </div>
        )
    }
});

ReactDOM.render(
    <CommentBox6 />,
    document.getElementById('example6')
);
//--example-7--------------------------------------------------------------------
var data = [
        {id: 1, author: "Pete Hunt", text: "This is one comment"},
        {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ];

var Comment7 = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup};
    },
    render: function() {
        return (
            <div className="comment7">
                <h2 className="commentAutho7r">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        )
    }
});

var CommentList7 = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment7 author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment7>
            );
        });
        return (
            <div className="commentList7">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm7 = React.createClass({
    render: function() {
        return (
            <div className="commentForm7">
                Hello. world!I am a CommentForm
            </div>
        )
    }
});

var CommentBox7 = React.createClass({
    render: function() {
        return (
            <div className="commentBox7">
                <h1>Comments</h1>
                <CommentList7 data={this.props.data} />
                <CommentForm7 />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox7 data={data} />,
    document.getElementById('example7')
);
//--example-8---------------------------------------------------------------------------
// not working on this step
ReactDOM.render(
    <CommentBox7 url="/api/comments" />,
    document.getElementById('content')
);//--example-9-------------------------------------------------------------------------

