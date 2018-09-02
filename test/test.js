var assert = require('assert');
var readtime = require('../build/index.js').default;

const testStr = `<h3>Section 1.10.33 of &#8220;de Finibus Bonorum et Malorum&#8221;, written by Cicero in 45 BC</h3>

<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.&#8221;</p>

<figure class="wp-block-image"><img src="http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196.jpg" alt="" class="wp-image-15" srcset="http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196.jpg 3936w, http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196-300x200.jpg 300w, http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196-768x512.jpg 768w, http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196-1024x683.jpg 1024w" sizes="(max-width: 3936px) 100vw, 3936px" /></figure>

<h3>1914 translation by H. Rackham</h3>

<p>&#8220;On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.&#8221;</p>

<figure class="wp-block-image"><img src="http://34.205.71.85/wp-content/uploads/2018/09/wallhaven-678855-e1535870098817.jpg" alt="" class="wp-image-24"/></figure>

<p>&#8220;On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.&#8221;</p>

<div style="width:500px; height:500px; background-image: url('http://34.205.71.85/wp-content/uploads/2018/09/wallhaven-678855-e1535870098817.jpg');"></div>

<p>Thank you for reading.</p>

<p>Goodbye.</p>

<div style="width:500px; height:500px; background: #ffffff url('http://34.205.71.85/wp-content/uploads/2018/09/wallhaven-678855-e1535870098817.jpg') no-repeat right top;"></div>

<p>🙂</p>`;


const testStr2 = `<h3>Section 1.10.33 of &#8220;de Finibus Bonorum et Malorum&#8221;, written by Cicero in 45 BC</h3>

<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.&#8221;</p>

<figure class="wp-block-image"><img src="http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196.jpg" alt="" class="wp-image-15" srcset="http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196.jpg 3936w, http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196-300x200.jpg 300w, http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196-768x512.jpg 768w, http://34.205.71.85/wp-content/uploads/2018/08/arid-clouds-daylight-1352196-1024x683.jpg 1024w" sizes="(max-width: 3936px) 100vw, 3936px" /></figure>

<h3>1914 translation by H. Rackham</h3>

<p>&#8220;On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.&#8221;</p>

<figure class="wp-block-image"><img src="http://34.205.71.85/wp-content/uploads/2018/09/wallhaven-678855-e1535870098817.jpg" alt="" class="wp-image-24"/></figure>`;



describe('ReadTime', function() {

	describe('#getReadTime(str)', function() {
		it('Should return 2.77', function() {
			var words = readtime.methods.getReadTime(testStr);
			assert.equal(2.77, words);			
		});
	});

	describe('#getReadTimeInSeconds(str)', function() {
		it('Should return 166', function() {
			var words = readtime.methods.getReadTimeInSeconds(testStr);
			assert.equal(166, words);			
		});
	});

	describe('#getReadTimeInMinutes(str)', function() {
		it('Should return 2.77', function() {
			var words = readtime.methods.getReadTimeInMinutes(testStr);
			assert.equal(2.77, words);			
		});
	});

	describe('#getReadTimeInSecondsString(str, false)', function() {
		it('Should return "166 seconds"', function() {
			var words = readtime.methods.getReadTimeInSecondsString(testStr, false);
			assert.equal("166 seconds", words);			
		});
	});

	describe('#getReadTimeInSecondsString(str, true)', function() {
		it('Should return "166 sec"', function() {
			var words = readtime.methods.getReadTimeInSecondsString(testStr, true);
			assert.equal("166 sec", words);			
		});
	});

	describe('#getReadTimeInMinutesString(str, false)', function() {
		it('Should return "2.77 minutes"', function() {
			var words = readtime.methods.getReadTimeInMinutesString(testStr, false);
			assert.equal("2.77 minutes", words);			
		});
	});

	describe('#getReadTimeInMinutesString(str, true)', function() {
		it('Should return "2.77 min"', function() {
			var words = readtime.methods.getReadTimeInMinutesString(testStr, true);
			assert.equal("2.77 min", words);			
		});
	});

	describe('#getReadTimeString(str, false)', function() {
		it('Should return "2 minutes, 46 seconds"', function() {
			var words = readtime.methods.getReadTimeString(testStr, false);
			assert.equal("2 minutes, 46 seconds", words);			
		});
	});

	describe('#getReadTimeString(str, true)', function() {
		it('Should return "2 min, 46 sec"', function() {
			var words = readtime.methods.getReadTimeString(testStr, true);
			assert.equal("2 min, 46 sec", words);			
		});
	});

	describe('#getReadTimeStringAlternate(str)', function() {
		it('Should return "3 minutes"', function() {
			var words = readtime.methods.getReadTimeStringAlternate(testStr);
			assert.equal("3 minutes", words);			
		});
	});	

	describe('#getReadTime(str2)', function() {
		it('Should return 1.72', function() {
			var words = readtime.methods.getReadTime(testStr2);
			assert.equal(1.72, words);			
		});
	});

	describe('#getReadTimeStringAlternate(str2)', function() {
		it('Should return "1 and a half minutes"', function() {
			var words = readtime.methods.getReadTimeStringAlternate(testStr2);
			assert.equal("1 and a half minutes", words);			
		});
	});	

});