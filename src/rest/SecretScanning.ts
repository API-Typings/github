import type { Nullable, Range } from 'extended-utility-types';

// import type {} from './Users';

export interface SecretScanningAlert {
	/**
	 * The security alert number.
	 */
	number?: number;

	/**
	 * The time that the alert was created in ISO 8601 format.
	 */
	created_at?: string;

	/**
	 * The REST API URL of the alert resource.
	 */
	url?: string;

	/**
	 * The GitHub URL of the alert resource.
	 */
	html_url?: string;

	/**
	 * The state of the secret scanning alert.
	 */
	state?: `${SecretScanningAlertState}`;

	/**
	 * The reason for resolving the alert.
	 */
	resolution?: Nullable<`${SecretScanningAlertResolution}`>;

	/**
	 * The time that the alert was resolved in ISO 8601 format.
	 */
	resolved_at?: Nullable<string>;
	resolved_by: Nullable<any>;

	/**
	 * The type of secret that secret scanning detected.
	 */
	secret_type?: string;

	/**
	 * The secret that was detected.
	 */
	secret?: string;
}

export enum SecretScanningAlertState {
	Open = 'open',
	Resolved = 'resolved'
}

export enum SecretScanningAlertResolution {
	FalsePositive = 'false_positive',
	WontFix = 'wont_fix',
	Revoked = 'revoked',
	UsedInTests = 'used_in_tests'
}

// SECTION Endpoints

/**
 * Lists all secret scanning alerts for a private repository, from newest to oldest. To use this
 * endpoint, you must be an administrator for the repository or organization, and you must use an
 * access token with the `repo` scope or `security_events` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
 *
 * @endpoint [GET](https://docs.github.com/en/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository) `/repos/{owner}/{repo}/secret-scanning/alerts`
 */
export interface ListSecretScanningAlerts {
	parameters: {
		owner: string;
		repo: string;
	};

	query: {
		/**
		 * Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
		 */
		state?: SecretScanningAlertState;

		/**
		 * Page number of the results to fetch.
		 */
		page?: number;

		/**
		 * Results per page.
		 */
		per_page?: Range<0, 100>;
	};

	response: SecretScanningAlert[];
}

/**
 * Gets a single secret scanning alert detected in a private repository. To use this endpoint, you
 * must be an administrator for the repository or organization, and you must use an access token
 * with the `repo` scope or `security_events` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
 *
 * @endpoint [GET](https://docs.github.com/en/rest/reference/secret-scanning#get-a-secret-scanning-alert) `/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`
 */
export interface GetSecretScanningAlert {
	parameters: {
		owner: string;
		repo: string;

		/**
		 * The number that identifies an alert. You can find this at the end of the URL for a code
		 * scanning alert within GitHub, and in the number field in the response from the
		 * `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
		 */
		alert_number: number;
	};

	response: SecretScanningAlert;
}

/**
 * Updates the status of a secret scanning alert in a private repository. To use this endpoint, you
 * must be an administrator for the repository or organization, and you must use an access token
 * with the `repo` scope or `security_events` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
 *
 * @endpoint [PATCH](https://docs.github.com/en/rest/reference/secret-scanning#update-a-secret-scanning-alert) `/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`
 */
export interface UpdateSecretScanningAlert {
	parameters: GetSecretScanningAlert['parameters'];
	body: {
		/**
		 * Sets the state of the secret scanning alert. You must provide resolution when you set
		 * the state to `resolved`.
		 */
		state: `${SecretScanningAlertState}`;

		/**
		 * The reason for resolving the alert.
		 */
		resolution?: Nullable<`${SecretScanningAlertResolution}`>;
	};

	response: SecretScanningAlert;
}

// !SECTION Endpoint
