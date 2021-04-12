import type { FixedTuple } from 'extended-utility-types';

// SECTION Check Runs

export enum CheckRunStatus {
	Queued = 'queued',
	InProgress = 'in_progress',
	Completed = 'completed'
}

export enum CheckRunConclusion {
	ActionRequired = 'action_required',
	Cancelled = 'cancelled',
	Failure = 'failure',
	Neutral = 'neutral',
	Success = 'success',
	Skipped = 'skipped',
	Stale = 'stale',
	TimedOut = 'timed_out'
}

export interface CheckRunOutput {
	/**
	 * The title of the check run.
	 */
	title: string;

	/**
	 * The summary of the check run. This parameter supports Markdown.
	 */
	summary: string;

	/**
	 * The details of the check run. This parameter supports Markdown.
	 */
	text?: string;

	/**
	 * Adds information from your analysis to specific lines of code.
	 *
	 * Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull
	 * request. The Checks API limits the number of annotations to a maximum of 50 per API request.
	 * To create more than 50 annotations, you have to make multiple requests to the
	 * `Update a check run` endpoint. Each time you update the check run, annotations are appended
	 * to the list of annotations that already exist for the check run.
	 */
	annotations?: Partial<FixedTuple<CheckRunAnnotation, 50>>;

	/**
	 * Adds images to the output displayed in the GitHub pull request UI.
	 */
	images?: CheckRunImage[];
}

export interface CheckRunAnnotation {
	/**
	 * The path of the file to add an annotation to.
	 */
	path: string;

	/**
	 * The start line of the annotation.
	 */
	start_line: number;

	/**
	 * The end line of the annotation.
	 */
	end_line: number;

	/**
	 * The start column of the annotation.
	 *
	 * Annotations only support `start_column` and `end_column` on the same line. Omit this
	 * parameter if `start_line` and `end_line` have different values.
	 */
	start_column?: number;

	/**
	 * The end column of the annotation.
	 *
	 * Annotations only support `start_column` and `end_column` on the same line. Omit this
	 * parameter if `start_line` and `end_line` have different values.
	 */
	end_column?: number;

	/**
	 * The level of the annotation.
	 */
	annotation_level: CheckRunAnnotationLevel;

	/**
	 * A short description of the feedback for these lines of code. The maximum size is 64 KB.
	 */
	message: string;

	/**
	 * The title that represents the annotation. The maximum size is 255 characters.
	 */
	title?: string;

	/**
	 * Details about this annotation. The maximum size is 64 KB.
	 */
	raw_details?: string;
}

export enum CheckRunAnnotationLevel {
	Notice = 'notice',
	Warning = 'warning',
	Failure = 'failure'
}

export interface CheckRunImage {
	/**
	 * The alternative text for the image.
	 */
	alt: string;

	/**
	 * The full URL of the image.
	 */
	image_url: string;

	/**
	 * A short image description.
	 */
	caption?: string;
}

export interface CheckRunAction {
	/**
	 * The text to be displayed on a button in the web UI. The maximum size is 20 characters.
	 */
	label: string;

	/**
	 * A short explanation of what this action would do. The maximum size is 40 characters.
	 */
	description: string;

	/**
	 * A reference for the action on the integrator's system. The maximum size is 20 characters.
	 */
	identifier: string;
}

// SECTION Endpoints

export interface CreateCheckRun {
	parameters: {
		owner: string;
		repo: string;
	};

	body: {
		/**
		 * The name of the check.
		 */
		name: string;

		/**
		 * The SHA of the commit.
		 */
		head_sha: string;

		/**
		 * The URL of the integrator's site that has the full details of the check. If the
		 * integrator does not provide this, then the homepage of the GitHub app is used.
		 */
		details_url?: string;

		/**
		 * A reference for the run on the integrator's system.
		 */
		external_id?: string;

		/**
		 * The current status.
		 *
		 * @defaultValue `queued`
		 */
		status?: Exclude<CheckRunStatus, CheckRunStatus.Completed>;

		/**
		 * The time that the check run began.
		 */
		started_at?: string;

		/**
		 * The final conclusion of the check.
		 *
		 * Required if you provide completed_at or a status of completed. Providing `conclusion`
		 * will automatically set the status parameter to `completed`. You cannot change a check run
		 * conclusion to `stale`, only GitHub can set this.
		 */
		conclusion?: string;

		/**
		 * The time the check completed.
		 */
		completed_at?: string;

		/**
		 * Check runs can accept a variety of data in the output object, including a `title` and
		 * summary and can optionally provide descriptive details about the run.
		 */
		output?: CheckRunOutput;

		/**
		 * Displays a button on GitHub that can be clicked to alert your app to do additional tasks.
		 */
		action?: Partial<FixedTuple<CheckRunAction, 3>>;
	};
}

// !SECTION

// !SECTION
