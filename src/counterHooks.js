// Generated by purs bundle 0.12.5
var PS = {};
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Control.Apply"] = $PS["Control.Apply"] || {};
  var exports = $PS["Control.Apply"];
  var Apply = function(Functor0, apply) {
    this.Functor0 = Functor0;
    this.apply = apply;
  };
  var apply = function(dict) {
    return dict.apply;
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Control.Applicative"] = $PS["Control.Applicative"] || {};
  var exports = $PS["Control.Applicative"];
  var Control_Apply = $PS["Control.Apply"];
  var Applicative = function(Apply0, pure) {
    this.Apply0 = Apply0;
    this.pure = pure;
  };
  var pure = function(dict) {
    return dict.pure;
  };
  var liftA1 = function(dictApplicative) {
    return function(f) {
      return function(a) {
        return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
      };
    };
  };
  exports["Applicative"] = Applicative;
  exports["pure"] = pure;
  exports["liftA1"] = liftA1;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Control.Apply.Indexed"] = $PS["Control.Apply.Indexed"] || {};
  var exports = $PS["Control.Apply.Indexed"];
  var IxApply = function(IxFunctor0, iapply) {
    this.IxFunctor0 = IxFunctor0;
    this.iapply = iapply;
  };
  var iapply = function(dict) {
    return dict.iapply;
  };
  exports["IxApply"] = IxApply;
  exports["iapply"] = iapply;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Control.Bind"] = $PS["Control.Bind"] || {};
  var exports = $PS["Control.Bind"];
  var Bind = function(Apply0, bind) {
    this.Apply0 = Apply0;
    this.bind = bind;
  };
  var bind = function(dict) {
    return dict.bind;
  };
  exports["Bind"] = Bind;
  exports["bind"] = bind;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Control.Bind.Indexed"] = $PS["Control.Bind.Indexed"] || {};
  var exports = $PS["Control.Bind.Indexed"];
  var IxBind = function(IxApply0, ibind) {
    this.IxApply0 = IxApply0;
    this.ibind = ibind;
  };
  var ibind = function(dict) {
    return dict.ibind;
  };
  exports["IxBind"] = IxBind;
  exports["ibind"] = ibind;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Control.Monad"] = $PS["Control.Monad"] || {};
  var exports = $PS["Control.Monad"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Bind = $PS["Control.Bind"];
  var Monad = function(Applicative0, Bind1) {
    this.Applicative0 = Applicative0;
    this.Bind1 = Bind1;
  };
  var ap = function(dictMonad) {
    return function(f) {
      return function(a) {
        return Control_Bind.bind(dictMonad.Bind1())(f)(function(v) {
          return Control_Bind.bind(dictMonad.Bind1())(a)(function(v1) {
            return Control_Applicative.pure(dictMonad.Applicative0())(v(v1));
          });
        });
      };
    };
  };
  exports["Monad"] = Monad;
  exports["ap"] = ap;
})(PS);
(function(exports) {
  exports.showIntImpl = function(n) {
    return n.toString();
  };
})((PS["Data.Show"] = PS["Data.Show"] || {}));
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Data.Show"] = $PS["Data.Show"] || {};
  var exports = $PS["Data.Show"];
  var $foreign = $PS["Data.Show"];
  var Show = function(show) {
    this.show = show;
  };
  var showInt = new Show($foreign.showIntImpl);
  var show = function(dict) {
    return dict.show;
  };
  exports["Show"] = Show;
  exports["show"] = show;
  exports["showInt"] = showInt;
})(PS);
(function(exports) {
  // module Unsafe.Coerce

  exports.unsafeCoerce = function(x) {
    return x;
  };
})((PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {}));
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Unsafe.Coerce"] = $PS["Unsafe.Coerce"] || {};
  var exports = $PS["Unsafe.Coerce"];
  var $foreign = $PS["Unsafe.Coerce"];
  exports["unsafeCoerce"] = $foreign.unsafeCoerce;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["React.Basic.DOM"] = $PS["React.Basic.DOM"] || {};
  var exports = $PS["React.Basic.DOM"];
  var Unsafe_Coerce = $PS["Unsafe.Coerce"];
  var text = Unsafe_Coerce.unsafeCoerce;
  exports["text"] = text;
})(PS);
(function(exports) {
  var React = require("react");

  exports.element_ = function(component, props) {
    return React.createElement.apply(null, [component, props].concat((props && props.children) || null));
  };
})((PS["React.Basic"] = PS["React.Basic"] || {}));
(function(exports) {
  exports.mkFn2 = function(fn) {
    /* jshint maxparams: 2 */
    return function(a, b) {
      return fn(a)(b);
    };
  };

  exports.runFn2 = function(fn) {
    return function(a) {
      return function(b) {
        return fn(a, b);
      };
    };
  };
})((PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {}));
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Data.Function.Uncurried"] = $PS["Data.Function.Uncurried"] || {};
  var exports = $PS["Data.Function.Uncurried"];
  var $foreign = $PS["Data.Function.Uncurried"];
  exports["mkFn2"] = $foreign.mkFn2;
  exports["runFn2"] = $foreign.runFn2;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["React.Basic"] = $PS["React.Basic"] || {};
  var exports = $PS["React.Basic"];
  var $foreign = $PS["React.Basic"];
  var Data_Function_Uncurried = $PS["Data.Function.Uncurried"];
  var element = Data_Function_Uncurried.runFn2($foreign.element_);
  exports["element"] = element;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["React.Basic.DOM.Internal"] = $PS["React.Basic.DOM.Internal"] || {};
  var exports = $PS["React.Basic.DOM.Internal"];
  var Unsafe_Coerce = $PS["Unsafe.Coerce"];
  var unsafeCreateDOMComponent = Unsafe_Coerce.unsafeCoerce;
  exports["unsafeCreateDOMComponent"] = unsafeCreateDOMComponent;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["React.Basic.DOM.Generated"] = $PS["React.Basic.DOM.Generated"] || {};
  var exports = $PS["React.Basic.DOM.Generated"];
  var React_Basic = $PS["React.Basic"];
  var React_Basic_DOM_Internal = $PS["React.Basic.DOM.Internal"];
  var p = function(dictUnion) {
    return React_Basic.element(React_Basic_DOM_Internal.unsafeCreateDOMComponent("p"));
  };
  var p_ = function(children) {
    return p()({
      children: children
    });
  };
  var h1 = function(dictUnion) {
    return React_Basic.element(React_Basic_DOM_Internal.unsafeCreateDOMComponent("h1"));
  };
  var h1_ = function(children) {
    return h1()({
      children: children
    });
  };
  var div = function(dictUnion) {
    return React_Basic.element(React_Basic_DOM_Internal.unsafeCreateDOMComponent("div"));
  };
  var div_ = function(children) {
    return div()({
      children: children
    });
  };
  var button = function(dictUnion) {
    return React_Basic.element(React_Basic_DOM_Internal.unsafeCreateDOMComponent("button"));
  };
  exports["button"] = button;
  exports["div"] = div;
  exports["div_"] = div_;
  exports["h1"] = h1;
  exports["h1_"] = h1_;
  exports["p"] = p;
  exports["p_"] = p_;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Data.Function"] = $PS["Data.Function"] || {};
  var exports = $PS["Data.Function"];
  var $$const = function(a) {
    return function(v) {
      return a;
    };
  };
  exports["const"] = $$const;
})(PS);
(function(exports) {
  exports.mkEffectFn1 = function mkEffectFn1(fn) {
    return function(x) {
      return fn(x)();
    };
  };
})((PS["Effect.Uncurried"] = PS["Effect.Uncurried"] || {}));
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Effect.Uncurried"] = $PS["Effect.Uncurried"] || {};
  var exports = $PS["Effect.Uncurried"];
  var $foreign = $PS["Effect.Uncurried"];
  exports["mkEffectFn1"] = $foreign.mkEffectFn1;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["React.Basic.Events"] = $PS["React.Basic.Events"] || {};
  var exports = $PS["React.Basic.Events"];
  var Data_Function = $PS["Data.Function"];
  var Effect_Uncurried = $PS["Effect.Uncurried"];
  var handler_ = function($21) {
    return Effect_Uncurried.mkEffectFn1(Data_Function["const"]($21));
  };
  exports["handler_"] = handler_;
})(PS);
(function(exports) {
  var React = require("react");

  exports.useState_ = function(tuple, initialState) {
    var r = React.useState(initialState);
    var state = r[0];
    var setState = r[1];
    return tuple(state, function(update) {
      return function() {
        return setState(update);
      };
    });
  };

  exports.unsafeSetDisplayName = function(displayName, component) {
    component.displayName = displayName;
    component.toString = function() {
      return displayName;
    };
    return component;
  };

  exports.displayName = function(component) {
    return typeof component === "string" ? component : component.displayName || "[unknown]";
  };
})((PS["React.Basic.Hooks"] = PS["React.Basic.Hooks"] || {}));
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Data.Functor"] = $PS["Data.Functor"] || {};
  var exports = $PS["Data.Functor"];
  var Functor = function(map) {
    this.map = map;
  };
  var map = function(dict) {
    return dict.map;
  };
  exports["Functor"] = Functor;
  exports["map"] = map;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Data.Functor.Indexed"] = $PS["Data.Functor.Indexed"] || {};
  var exports = $PS["Data.Functor.Indexed"];
  var IxFunctor = function(imap) {
    this.imap = imap;
  };
  var imap = function(dict) {
    return dict.imap;
  };
  exports["imap"] = imap;
  exports["IxFunctor"] = IxFunctor;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Data.Tuple"] = $PS["Data.Tuple"] || {};
  var exports = $PS["Data.Tuple"];
  var Tuple = (function() {
    function Tuple(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    Tuple.create = function(value0) {
      return function(value1) {
        return new Tuple(value0, value1);
      };
    };
    return Tuple;
  })();
  exports["Tuple"] = Tuple;
})(PS);
(function(exports) {
  exports.pureE = function(a) {
    return function() {
      return a;
    };
  };

  exports.bindE = function(a) {
    return function(f) {
      return function() {
        return f(a())();
      };
    };
  };
})((PS["Effect"] = PS["Effect"] || {}));
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Effect"] = $PS["Effect"] || {};
  var exports = $PS["Effect"];
  var $foreign = $PS["Effect"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Apply = $PS["Control.Apply"];
  var Control_Bind = $PS["Control.Bind"];
  var Control_Monad = $PS["Control.Monad"];
  var Data_Functor = $PS["Data.Functor"];
  var monadEffect = new Control_Monad.Monad(
    function() {
      return applicativeEffect;
    },
    function() {
      return bindEffect;
    }
  );
  var bindEffect = new Control_Bind.Bind(function() {
    return applyEffect;
  }, $foreign.bindE);
  var applyEffect = new Control_Apply.Apply(function() {
    return functorEffect;
  }, Control_Monad.ap(monadEffect));
  var applicativeEffect = new Control_Applicative.Applicative(function() {
    return applyEffect;
  }, $foreign.pureE);
  var functorEffect = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEffect));
  exports["functorEffect"] = functorEffect;
  exports["applyEffect"] = applyEffect;
  exports["applicativeEffect"] = applicativeEffect;
  exports["bindEffect"] = bindEffect;
  exports["monadEffect"] = monadEffect;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["React.Basic.Hooks"] = $PS["React.Basic.Hooks"] || {};
  var exports = $PS["React.Basic.Hooks"];
  var $foreign = $PS["React.Basic.Hooks"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Apply = $PS["Control.Apply"];
  var Control_Apply_Indexed = $PS["Control.Apply.Indexed"];
  var Control_Bind_Indexed = $PS["Control.Bind.Indexed"];
  var Data_Function_Uncurried = $PS["Data.Function.Uncurried"];
  var Data_Functor = $PS["Data.Functor"];
  var Data_Functor_Indexed = $PS["Data.Functor.Indexed"];
  var Data_Tuple = $PS["Data.Tuple"];
  var Effect = $PS["Effect"];
  var Unsafe_Coerce = $PS["Unsafe.Coerce"];
  var useState = function(initialState) {
    return function() {
      return $foreign.useState_(Data_Function_Uncurried.mkFn2(Data_Tuple.Tuple.create), initialState);
    };
  };
  var unsafeReactFunctionComponent = Unsafe_Coerce.unsafeCoerce;
  var ixFunctorRender = new Data_Functor_Indexed.IxFunctor(function(f) {
    return function(v) {
      return Data_Functor.map(Effect.functorEffect)(f)(v);
    };
  });
  var ixApplyRender = new Control_Apply_Indexed.IxApply(
    function() {
      return ixFunctorRender;
    },
    function(v) {
      return function(v1) {
        return Control_Apply.apply(Effect.applyEffect)(v)(v1);
      };
    }
  );
  var ixBindRender = new Control_Bind_Indexed.IxBind(
    function() {
      return ixApplyRender;
    },
    function(v) {
      return function(f) {
        return function __do() {
          var a = v();
          var v1 = f(a);
          return v1();
        };
      };
    }
  );
  var functorRender = new Data_Functor.Functor(function(f) {
    return function(v) {
      return Data_Functor.map(Effect.functorEffect)(f)(v);
    };
  });
  var component = function(name) {
    return function(renderFn) {
      var c = unsafeReactFunctionComponent(function(props) {
        var v = renderFn(props);
        return v();
      });
      return function() {
        return $foreign.unsafeSetDisplayName(name, c);
      };
    };
  };
  var bind = function(dictIxBind) {
    return Control_Bind_Indexed.ibind(dictIxBind);
  };
  var applyRender = function(dictTypeEquals) {
    return new Control_Apply.Apply(
      function() {
        return functorRender;
      },
      function(v) {
        return function(v1) {
          return Control_Apply.apply(Effect.applyEffect)(v)(v1);
        };
      }
    );
  };
  var applicativeRender = function(dictTypeEquals) {
    return new Control_Applicative.Applicative(
      function() {
        return applyRender(dictTypeEquals);
      },
      function(a) {
        return Control_Applicative.pure(Effect.applicativeEffect)(a);
      }
    );
  };
  exports["component"] = component;
  exports["useState"] = useState;
  exports["bind"] = bind;
  exports["ixFunctorRender"] = ixFunctorRender;
  exports["ixApplyRender"] = ixApplyRender;
  exports["ixBindRender"] = ixBindRender;
  exports["functorRender"] = functorRender;
  exports["applyRender"] = applyRender;
  exports["applicativeRender"] = applicativeRender;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5

  $PS["Type.Equality"] = $PS["Type.Equality"] || {};
  var exports = $PS["Type.Equality"];
  var TypeEquals = function(from, to) {
    this.from = from;
    this.to = to;
  };
  var to = function(dict) {
    return dict.to;
  };
  var refl = new TypeEquals(
    function(a) {
      return a;
    },
    function(a) {
      return a;
    }
  );
  var from = function(dict) {
    return dict.from;
  };
  exports["TypeEquals"] = TypeEquals;
  exports["to"] = to;
  exports["from"] = from;
  exports["refl"] = refl;
})(PS);
(function($PS) {
  $PS["CounterHooks"] = $PS["CounterHooks"] || {};
  var exports = $PS["CounterHooks"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Data_Show = $PS["Data.Show"];
  var React_Basic_DOM = $PS["React.Basic.DOM"];
  var React_Basic_DOM_Generated = $PS["React.Basic.DOM.Generated"];
  var React_Basic_Events = $PS["React.Basic.Events"];
  var React_Basic_Hooks = $PS["React.Basic.Hooks"];
  var Type_Equality = $PS["Type.Equality"];
  var mkCounter = React_Basic_Hooks.component("Counter")(function(props) {
    return React_Basic_Hooks.bind(React_Basic_Hooks.ixBindRender)(React_Basic_Hooks.useState(0))(function(v) {
      return Control_Applicative.pure(React_Basic_Hooks.applicativeRender(Type_Equality.refl))(
        React_Basic_DOM_Generated.div_([
          React_Basic_DOM_Generated.h1_([React_Basic_DOM.text("Counter (PS, useState)")]),
          React_Basic_DOM_Generated.p_([React_Basic_DOM.text("You clicked " + (Data_Show.show(Data_Show.showInt)(v.value0) + " times"))]),
          React_Basic_DOM_Generated.button()({
            onClick: React_Basic_Events.handler_(
              v.value1(function(v1) {
                return (v1 + 1) | 0;
              })
            ),
            children: [React_Basic_DOM.text("Click me")]
          })
        ])
      );
    });
  });
  exports["mkCounter"] = mkCounter;
})(PS);
module.exports = PS["CounterHooks"];
