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
                    <h1>Comments3</h1>
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
                    <h1>Comments5</h1>
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
                <h1>Comments6</h1>
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
        console.log(this.props.data);
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
    getDefaultProps: function() {
        return {
            data: []
        };
    },
    render: function() {
        return (
            <div className="commentBox7">
                <h1>Comments7</h1>
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
    <CommentBox8 url="/api/comments" />,
    document.getElementById('example8')
);//--example-9-------------------------------------------------------------------------
var CommentForm9 = React.createClass({
    render: function() {
        return (
            <div className="commentForm9">
                Hello. world!I am a CommentForm9
            </div>
        )
    }
});
var Comment9 = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup};
    },
    render: function() {
        return (
            <div className="comment9">
                <h2 className="commentAuthor9">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        )
    }
    });
var CommentList9 = React.createClass({
        render: function() {
            var commentNodes = this.props.data.map(function(comment) {
                    return (
                        <Comment9 author={comment.author} key={comment.id}>
                            {comment.text}
                        </Comment9>
                    );
            });
            return (
                <div className="commentList9">
                    {commentNodes}
                </div>
            )
        }
    });
var CommentBox9 = React.createClass({
       getInitialState: function() {
          return {data: []};
       },
        render: function() {
            return (
                <div className="commentBox9">
                    <h1>Comments9</h1>
                    <CommentList9 data={this.state.data} />
                    <CommentForm9 />
                </div>
            )
        }
    });

    ReactDOM.render(
        <CommentBox9 data={data} />,
        document.getElementById('example9')

    );
//-------------------------------------------------
var data = [
    {"author": "Pete Hunt", "text": "This is one comment"},
    {"author": "Jordan Walke", "text": "This is *another* comment"}
];

var CommentBox10 = React.createClass({
        getInitialState: function() {
            return {data: []}
        },
        loadCommentsFromServer: function() {
            $.ajax({
              url: this.props.url,
                cache:false,
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function() {

                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            }) ;
        },
        render: function() {
            return (
                <div className="commentBox10">
                    <h1>Comments</h1>
                    <CommentList data={this.state.data} />
                    <CommentForm />
                </div>
            );
        }
    });

    ReactDOM.render(
        <CommentBox url="/api/comments" pollInterval={2000} />,
        document.getElementById('example10')
    );

var CommentForm = React.createClass({
        render: function() {
            return (
                <form className="commentForm">
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Say something..." />
                    <input type="submit" value="Post" />
                </form>
            );
        }
    });

//--------------------------------------------------------------------------
//when component first use(initial)
var ComponentInit = React.createClass({
        getDefaultProps: function() {

        },
        getInitialState: function(){

        },
        componentWillMount: function() {

        },
        render: function() {

        },
        componentDidMount: function() {
            //this.getDOMNode()
        }
    });

//repeat use component
var ComponentRepeat = React.createClass({
        getInitialState: function() {

        },
        componentWillMount: function() {

        },
        render: function() {

        },
        componentDidMount: function() {

        }
    });

// if state component change
var ComponentChage = React.createClass({
        componentWillRecieveProps: function() {

        },
        shouldComponentUpdate: function() {

        },
        componentWillUpdate: function() {

        },
        render: function() {

        },
        componentDidUpdate: function() {

        }
    });

// when we stop used component

var ComponentStop = React.createClass({
        componentWillUnmount: function() {

        }
    });

Context - може бути запитаний

