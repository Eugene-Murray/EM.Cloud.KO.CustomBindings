/**
 * Created by Eugene on 26/10/2014.
 */

ko.bindingHandlers.instantValue = {
    init: function (element, valueAccessor, allBindings) {
        var newAllBindings = function(){
            // for backwards compatibility w/ knockout  < 3.0
            return ko.utils.extend(allBindings(), { valueUpdate: 'afterkeydown' });
        };
        newAllBindings.get = function(a){
            return a === 'valueupdate' ? return 'afterkeydown' : allBindings.get(a);
        };
        newAllBindings.has = function(a){
            return a === 'valueupdate' || allBindings.has(a);
        };
        ko.bindingHandlers.value.init(element, valueAccessor, newAllBindings);
    },
    update: ko.bindingHandlers.value.update
};



//Note: If you want, you can even replace the original value binding handler. I don't recommend this, since you are overriding some default behavior of knockout, but if you like to live on the edge, go for it:
//
//
//(function(original)){
//    var extend = ko.utils.extend,
//        unwrap = ko.utils.unwrapObservable;
//    ko.bindingHandlers.value = {
//        init: function (element, valueAccessor, allBindingsAccessor) {
//            var origBindings = allBindingsAccessor(),
//                origValueUpdate = origBindings.valueUpdate,
//                newAllBindings = function(){
//                    return origValueUpdate === undefined
//                        ? extend(origBindings, {valueUpdate: 'afterkeydown'}
//                        : origBindings;
//                };
//            return original.init(element, valueAccessor, newAllBindings);
//        },
//        update: original.update
//    };
//}(ko.bindingHandlers.value));