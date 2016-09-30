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
		}

	}

}

</script>