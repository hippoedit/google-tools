var langs = [
    ['auto', 'Automatic'],
    ['en', 'English'],
    ['de', 'German'],
    ['fr', 'French'],
    ['ru', 'Russian'],
    ['af', 'Afrikaans'],
    ['sq', 'Albanian'],
    ['am', 'Amharic'],
    ['ar', 'Arabic'],
    ['hy', 'Armenian'],
    ['az', 'Azerbaijani'],
    ['eu', 'Basque'],
    ['be', 'Belarusian'],
    ['bn', 'Bengali'],
    ['bs', 'Bosnian'],
    ['bg', 'Bulgarian'],
    ['ca', 'Catalan'],
    ['ceb', 'Cebuano'],
    ['ny', 'Chichewa'],
    ['zh-cn', 'Chinese Simplified'],
    ['zh-tw', 'Chinese Traditional'],
    ['co', 'Corsican'],
    ['hr', 'Croatian'],
    ['cs', 'Czech'],
    ['da', 'Danish'],
    ['nl', 'Dutch'],
    ['eo', 'Esperanto'],
    ['et', 'Estonian'],
    ['tl', 'Filipino'],
    ['fi', 'Finnish'],
    ['fy', 'Frisian'],
    ['gl', 'Galician'],
    ['ka', 'Georgian'],
    ['el', 'Greek'],
    ['gu', 'Gujarati'],
    ['ht', 'Haitian Creole'],
    ['ha', 'Hausa'],
    ['haw', 'Hawaiian'],
    ['iw', 'Hebrew'],
    ['hi', 'Hindi'],
    ['hmn', 'Hmong'],
    ['hu', 'Hungarian'],
    ['is', 'Icelandic'],
    ['ig', 'Igbo'],
    ['id', 'Indonesian'],
    ['ga', 'Irish'],
    ['it', 'Italian'],
    ['ja', 'Japanese'],
    ['jw', 'Javanese'],
    ['kn', 'Kannada'],
    ['kk', 'Kazakh'],
    ['km', 'Khmer'],
    ['ko', 'Korean'],
    ['ku', 'Kurdish (Kurmanji)'],
    ['ky', 'Kyrgyz'],
    ['lo', 'Lao'],
    ['la', 'Latin'],
    ['lv', 'Latvian'],
    ['lt', 'Lithuanian'],
    ['lb', 'Luxembourgish'],
    ['mk', 'Macedonian'],
    ['mg', 'Malagasy'],
    ['ms', 'Malay'],
    ['ml', 'Malayalam'],
    ['mt', 'Maltese'],
    ['mi', 'Maori'],
    ['mr', 'Marathi'],
    ['mn', 'Mongolian'],
    ['my', 'Myanmar (Burmese)'],
    ['ne', 'Nepali'],
    ['no', 'Norwegian'],
    ['ps', 'Pashto'],
    ['fa', 'Persian'],
    ['pl', 'Polish'],
    ['pt', 'Portuguese'],
    ['ma', 'Punjabi'],
    ['ro', 'Romanian'],
    ['sm', 'Samoan'],
    ['gd', 'Scots Gaelic'],
    ['sr', 'Serbian'],
    ['st', 'Sesotho'],
    ['sn', 'Shona'],
    ['sd', 'Sindhi'],
    ['si', 'Sinhala'],
    ['sk', 'Slovak'],
    ['sl', 'Slovenian'],
    ['so', 'Somali'],
    ['es', 'Spanish'],
    ['su', 'Sundanese'],
    ['sw', 'Swahili'],
    ['sv', 'Swedish'],
    ['tg', 'Tajik'],
    ['ta', 'Tamil'],
    ['te', 'Telugu'],
    ['th', 'Thai'],
    ['tr', 'Turkish'],
    ['uk', 'Ukrainian'],
    ['ur', 'Urdu'],
    ['uz', 'Uzbek'],
    ['vi', 'Vietnamese'],
    ['cy', 'Welsh'],
    ['xh', 'Xhosa'],
    ['yi', 'Yiddish'],
    ['yo', 'Yoruba'],
    ['zu', 'Zulu']
];

function dumpLanguagesCombo(id, auto)
{
	var vItems = "";
	for (var i = 0; i < langs.length; i++)
	{
		if (langs[i][0] != "auto" || auto == true)
			vItems += '<item text="' + langs[i][1] + '"/>';
	}

	return '<combobox id="' + id + '" minwidth="25">' + vItems + '</combobox>';
}
