/**
 * Created by Eugene on 26/10/2014.
 */

//http://tech.pro/blog/1863/10-knockout-binding-handlers-i-don-t-want-to-live-without

ko.bindingHandlers.href = {
    update: function (element, valueAccessor) {
        ko.bindingHandlers.attr.update(element, function () {
            return { href: valueAccessor()}
        });
    }
};

ko.bindingHandlers.src = {
    update: function (element, valueAccessor) {
        ko.bindingHandlers.attr.update(element, function () {
            return { src: valueAccessor()}
        });
    }
};


