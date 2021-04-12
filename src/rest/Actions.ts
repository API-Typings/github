import type { Nullable, Range } from 'extended-utility-types';

export interface Artifact {
	id: number;
	node_id: string;

	/**
	 * The name of the artifact.
	 */
	name: string;

	/**
	 * The size in bytes of the artifact.
	 */
	size_in_bytes: number;
	url: string;
	archive_download_url: string;

	/**
	 * Whether or not the artifact has expired.
	 */
	expired: boolean;
	created_at: Nullable<string>;
	expires_at: string;
	updated_at: Nullable<string>;
}

// SECTION Endpoints

export interface ListRepositoryArtifacts {
	parameters: {
		owner: string;
		repo: string;
	};

	query: {
		/**
		 * Results per page.
		 */
		per_page?: Range<0, 100>;

		/**
		 * Page number of the results to fetch.
		 */
		page?: number;
	};

	response: {
		total_count: number;
		artifacts: Artifact[];
	};
}

export interface GetArtifact {
	parameters: ListRepositoryArtifacts['parameters'] & {
		artifact_id: number;
	};

	response: Artifact;
}

export interface DeleteArtifact {
	parameters: GetArtifact['parameters'];
	response: never;
}

export interface DownloadArtifact {
	parameters: GetArtifact['parameters'] & {
		archive_format: string;
	};

	response: never;
}

export interface ListWorkflowRunArtifacts {
	parameters: ListRepositoryArtifacts['parameters'] & {
		/**
		 * The ID of the workflow run.
		 */
		run_id: number;
	};

	query: ListRepositoryArtifacts['query'];
	response: ListRepositoryArtifacts['response'];
}

// !SECTION
