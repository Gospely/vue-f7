<script>

export default {

	props: {
		link: {
			type: Boolean,
			default () {
				return true;
			}
		},

		title: {
			type: String,
			default () {
				return '';
			}
		},

		icon: {
			type: String,
			default () {
				return '';
			}
		},

		after: {
			type: String,
			default () {
				return '';
			}
		},

		key: {
			type: Number,
			default () {
				return 0;
			}
		},

		item: {
			type: Object,
			default () {
				return [];
			}
		},

		titleVisible: {
			type: Boolean,
			default () {
				return true;
			}
		},

		contentTitle: {
			type: String,
			default () {
				return '';
			}
		},

		media: {
			type: Boolean,
			default () {
				return false;
			}
		},

		subTitle: {
			type: String,
			default () {
				return '';
			}
		},

		text: {
			type: String,
			default () {
				return '';
			}
		},

		optional: {
			type: Boolean,
			default () {
				return false;
			}
		},

		name: {
			type: String,
			default () {
				return '';
			}
		},

		optionType: {
			type: String,
			default () {
				return 'radio';
			}
		}

	}

}

</script>