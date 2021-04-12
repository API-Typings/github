export interface ActionBillingUsage {
	/**
	 * The sum of the free and paid GitHub Actions minutes used.
	 */
	total_minutes_used: number;

	/**
	 * The total paid GitHub Actions minutes used.
	 */
	total_paid_minutes_used: number;

	/**
	 * The amount of free GitHub Actions minutes available.
	 */
	included_minutes: number;
	minutes_used_breakdown: {
		/**
		 * Total minutes used on Ubuntu runner machines.
		 */
		UBUNTU?: number;

		/**
		 * Total minutes used on macOS runner machines.
		 */
		MACOS?: number;

		/**
		 * Total minutes used on Windows runner machines.
		 */
		WINDOWS?: number;
	};
}

export interface PackageBillingUsage {
	/**
	 * Sum of the free and paid storage space (GB) for GitHuub Packages.
	 */
	total_gigabytes_bandwidth_used: number;

	/**
	 * Total paid storage space (GB) for GitHuub Packages.
	 */
	total_paid_gigabytes_bandwidth_used: number;

	/**
	 * Free storage space (GB) for GitHub Packages.
	 */
	included_gigabytes_bandwidth: number;
}

export interface TotalBillingUsage {
	/**
	 * Numbers of days left in billing cycle.
	 */
	days_left_in_billing_cycle: number;

	/**
	 * Estimated storage space (GB) used in billing cycle.
	 */
	estimated_paid_storage_for_month: number;

	/**
	 * Estimated sum of free and paid storage space (GB) used in billing cycle.
	 */
	estimated_storage_for_month: number;
}

// SECTION Endpoints

export interface GetOrganizationGitHubActionsBilling {
	parameters: {
		org: string;
	};

	response: ActionBillingUsage;
}

export interface GetOrganizationGitHubPackagesBilling {
	parameters: {
		org: string;
	};

	response: PackageBillingUsage;
}

export interface GetOrganizationSharedStorageBilling {
	parameters: {
		org: string;
	};

	response: TotalBillingUsage;
}

// !SECTION
