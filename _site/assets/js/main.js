var r = document.querySelector(':root');
var colors = getComputedStyle(r);
var colorTheme = colors.getPropertyValue('--color-theme');

var headerElement = document.querySelector(".header");
var subMenuElements = document.querySelectorAll(".sub-menu");

btnScrollToTop = document.querySelector(".btn-to-top");
window.onscroll = function() {
	scrollToTopButton();
	setHeading();
};
scrollToTopButton();
setHeading();
function setHeading() {
	let scrollLeght1 = document.documentElement.scrollTop;
	let scrollLeght2 = document.body.scrollTop;
	if (scrollLeght1>20 || scrollLeght2>20) {
		headerElement.style.backgroundColor = colors.getPropertyValue('--white');
		headerElement.style.borderColor = colors.getPropertyValue('--color-theme');
		subMenuElements.forEach(e => e.style.backgroundColor = colors.getPropertyValue('--white'));
	}
	else {
		headerElement.style.backgroundColor = "transparent";
		subMenuElements.forEach(e => e.style.backgroundColor = 'transparent');
		headerElement.style.borderColor = "transparent";
	}
}

function scrollToTopButton() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		btnScrollToTop.style.opacity = "1";
		btnScrollToTop.style.visibility = "visible";
	} else {
		btnScrollToTop.style.opacity = "0";
		btnScrollToTop.style.visibility = "hidden";
	}
	
}

//topic search
var topicSearchElement = document.querySelector('.topic-search');
var optionTopicSearchElements = topicSearchElement.querySelectorAll('.topic-search-option');
var btnTopicSearchElement = topicSearchElement.querySelector('.topic-search-btn');
optionTopicSearchElements.forEach(elem => {
	elem.onclick = function (e) {
		btnTopicSearchElement.innerText = e.target.innerText;
		btnTopicSearchElement.name = e.target.name;

		console.log(btnTopicSearchElement.name);
	}
});

// topic group
var topicLinks = document.querySelectorAll('.topic-link');
topicLinks.forEach(topicLink => {
	let color = topicLink.className.split("0")[1];
	topicLink.style.borderColor = "var(--"+color+")";
	let topicLinkIcon = topicLink.querySelector(".topic-link-icon");
	let topicLinkText = topicLink.querySelector(".topic-link-text");
	topicLinkIcon.style.backgroundColor = "var(--"+color+")";
	topicLinkIcon.style.borderColor = "var(--"+color+")";
	topicLinkText.style.color = "var(--"+color+")";
	topicLink.addEventListener("mouseenter", function() {
		topicLink.style.backgroundColor = "var(--"+color+")";
		topicLinkText.style.color = "var(--white)";
	});
	topicLink.addEventListener("mouseleave", function() {
		topicLinkText.style.color = "var(--"+color+")";
		topicLink.style.backgroundColor = "var(--white)";
	});

});

// topic blogcard

var topicBlogcards = document.querySelectorAll(".topic-blogcard");
topicBlogcards.forEach (topicBlogcard => {
	let color = topicBlogcard.name;
	topicBlogcard.style.backgroundColor = "var(--"+color+")";
	topicBlogcard.addEventListener("mouseenter", function() {
		topicBlogcard.style.backgroundColor = "var(--"+color+"-d)"
	});
	topicBlogcard.addEventListener("mouseleave", function() {
		topicBlogcard.style.backgroundColor = "var(--"+color+")"
	});
})
