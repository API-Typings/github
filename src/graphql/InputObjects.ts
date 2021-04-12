import type { Nullable } from 'extended-utility-types';
import type {
	AuditLogOrderField,
	CheckAnnotationLevel,
	CheckConclusionState,
	CheckRunType,
	CheckStatusState,
	CommitContributionOrderField,
	DeploymentOrderField,
	DeploymentStatusState,
	DiffSide,
	EnterpriseAdministratorInvitationOrderField,
	EnterpriseAdministratorRole,
	EnterpriseDefaultRepositoryPermissionSettingValue,
	EnterpriseEnabledDisabledSettingValue,
	EnterpriseEnabledSettingValue,
	EnterpriseMemberOrderField,
	EnterpriseMembersCanCreateRepositoriesSettingValue,
	EnterpriseMembersCanMakePurchasesSettingValue,
	EnterpriseServerInstallationOrderField,
	EnterpriseServerUserAccountEmailOrderField,
	EnterpriseServerUserAccountOrderField,
	EnterpriseServerUserAccountsUploadOrderField,
	GistOrderField,
	IpAllowListEnabledSettingValue,
	IpAllowListEntryOrderField,
	IssueCommentOrderField,
	IssueOrderField,
	IssueState,
	LabelOrderField,
	LanguageOrderField,
	LockReason,
	MilestoneOrderField,
	Node,
	NotificationRestrictionSettingValue,
	Orderable,
	OrderDirection,
	OrganizationOrderField,
	PackageFileOrderField,
	PackageOrderField,
	PackageVersionOrderField,
	ProjectOrderField,
	ProjectState,
	ProjectTemplate,
	PullRequestMergeMethod,
	PullRequestOrderField,
	PullRequestReviewEvent,
	PullRequestUpdateState,
	ReactionContent,
	ReactionOrderField,
	RefOrderField,
	ReleaseOrderField,
	ReportedContentClassifiers,
	RepositoryInteractionLimit,
	RepositoryInteractionLimitExpiry,
	RepositoryInvitationOrderField,
	RepositoryOrderField,
	RepositoryVisibility,
	RequestableCheckStatusState,
	SAMLDigestAlgorithm,
	SAMLSignatureAlgorithm,
	SavedReplyOrderField,
	SecurityAdvisoryIdentifierType,
	SecurityAdvisoryOrderField,
	SecurityVulnerabilityOrderField,
	SponsorableOrderField,
	SponsorshipOrderField,
	SponsorsTierOrderField,
	StarOrderField,
	SubscriptionState,
	TeamDiscussionCommentOrderField,
	TeamDiscussionOrderField,
	TeamMemberOrderField,
	TeamOrderField,
	TeamRepositoryOrderField,
	TeamReviewAssignmentAlgorithm,
	TopicSuggestionDeclineReason,
	UserStatusOrderField,
	VerifiableDomainOrderField
} from './';

export interface InputObject {
	/**
	 * A unique identifier for the client performing the mutation.
	 */
	clientMutationId?: Nullable<string>;
}

export type AcceptEnterpriseAdministratorInvitationInput = InputObject & Node<'invitationId'>;

export interface AcceptTopicSuggestionInput extends InputObject, Node<'repositoryId'> {
	/**
	 * The name of the suggested topic.
	 */
	name: string;
}

export interface AddAssigneesToAssignableInput extends InputObject, Node<'assignableId'> {
	/**
	 * The ID of users to add as assignees.
	 */
	assigneeIds: string[];
}

export interface AddCommentInput extends InputObject, Node<'subjectId'> {
	/**
	 * The contents of the comment.
	 */
	body: string;
}

export interface AddEnterpriseSupportEntitlementInput extends InputObject, Node<'enterpriseId'> {
	/**
	 * The login of a member who will receive the support entitlement.
	 */
	login: string;
}

export interface AddLabelsToLabelableInput extends Node<'labelableId'> {
	/**
	 * The ids of the labels to add.
	 */
	labelIds: string[];
}

export interface AddProjectCardInput extends InputObject, Node<'projectColumnId'> {
	/**
	 * The content of the card. Must be a member of the ProjectCardItem union
	 */
	contentId?: Nullable<string>;

	/**
	 * The note on the card.
	 */
	note?: Nullable<string>;
}

export interface AddProjectColumnInput extends InputObject, Node<'projectId'> {
	/**
	 * The name of the column.
	 */
	name: string;
}

export interface AddPullRequestReviewCommentInput extends InputObject {
	/**
	 * The text of the comment.
	 */
	body: string;

	/**
	 * The SHA of the commit to comment on.
	 */
	commitOID?: Nullable<string>;

	/**
	 * The comment id to reply to.
	 */
	inReplyTo?: Nullable<string>;

	/**
	 * The relative path of the file to comment on.
	 */
	path?: Nullable<string>;

	/**
	 * The line index in the diff to comment on.
	 */
	position?: Nullable<number>;

	/**
	 * The node ID of the pull request reviewing
	 */
	pullRequestId?: Nullable<string>;

	/**
	 * The Node ID of the review to modify.
	 */
	pullRequestReviewId?: Nullable<string>;
}

export interface AddPullRequestReviewInput extends InputObject, Node<'pullRequestId'> {
	/**
	 * The contents of the review body comment.
	 */
	body?: Nullable<string>;

	/**
	 * The review line comments.
	 */
	comments?: Nullable<Nullable<DraftPullRequestReviewComment>[]>;

	/**
	 * The commit OID the review pertains to.
	 */
	commitOID?: Nullable<string>;

	/**
	 * The event to perform on the pull request review.
	 */
	event?: Nullable<PullRequestReviewEvent>;

	/**
	 * The review line comment threads.
	 */
	threads?: Nullable<Nullable<DraftPullRequestReviewThread>[]>;
}

export interface AddPullRequestReviewThreadInput extends InputObject {
	/**
	 * Body of the thread's first comment.
	 */
	body: string;

	/**
	 * The line of the blob to which the thread refers. The end of the line range for multi-line
	 * comments.
	 */
	line: number;

	/**
	 * Path to the file being commented on.
	 */
	path: string;

	/**
	 * The node ID of the pull request reviewing
	 */
	pullRequestId?: Nullable<string>;

	/**
	 * The Node ID of the review to modify.
	 */
	pullRequestReviewId?: Nullable<string>;

	/**
	 * The side of the diff on which the line resides. For multi-line comments, this is the side
	 * for the end of the line range.
	 */
	side?: Nullable<DiffSide>;

	/**
	 * The first line of the range to which the comment refers.
	 */
	startLine?: Nullable<number>;

	/**
	 * The side of the diff on which the start line resides.
	 */
	startSide?: Nullable<DiffSide>;
}

export interface AddReactionInput extends InputObject, Node<'subjectId'> {
	/**
	 * The name of the emoji to react with.
	 */
	content: ReactionContent;
}

export type AddStarInput = InputObject & Node<'starrableId'>;

export interface AddVerifiableDomainInput extends InputObject, Node<'ownerId'> {
	/**
	 * The URL of the domain
	 */
	domain: string;
}

export type ApproveVerifiableDomainInput = InputObject & Node;

export type ArchiveRepositoryInput = InputObject & Node<'repositoryId'>;

export type AuditLogOrder = Orderable<AuditLogOrderField>;

export type CancelEnterpriseAdminInvitationInput = InputObject & Node<'invitationId'>;

export interface ChangeUserStatusInput extends InputObject {
	/**
	 * The emoji to represent your status. Can either be a native Unicode emoji or an emoji name
	 * with colons.
	 */
	emoji?: Nullable<string>;

	/**
	 * If set, the user status will not be shown after this date.
	 */
	expiresAt?: Nullable<string>;

	/**
	 * Whether this status should indicate you are not fully available on GitHub.
	 */
	limitedAvailability?: Nullable<boolean>;

	/**
	 * A short description of your current status.
	 */
	message?: Nullable<string>;

	/**
	 * The ID of the organization whose members will be allowed to see the status. If
	 * omitted, the status will be publicly visible.
	 */
	organizationId?: Nullable<string>;
}

/**
 * Information from a check run analysis to specific lines of code
 */
export interface CheckAnnotationData {
	/**
	 * Represents an annotation's information level
	 */
	annotationLevel: CheckAnnotationLevel;

	/**
	 * The location of the annotation
	 */
	location: CheckAnnotationRange;

	/**
	 * A short description of the feedback for these lines of code.
	 */
	message: string;

	/**
	 * The path of the file to add an annotation to.
	 */
	path: string;

	/**
	 * Details about this annotation.
	 */
	rawDetails?: Nullable<string>;

	/**
	 * The title that represents the annotation.
	 */
	title?: Nullable<string>;
}

/**
 * Information from a check run analysis to specific lines of code
 */
export interface CheckAnnotationRange {
	/**
	 * The ending column of the range.
	 */
	endColumn?: Nullable<number>;

	/**
	 * The ending line of the range.
	 */
	endLine: number;

	/**
	 * The starting column of the range.
	 */
	startColumn?: Nullable<number>;

	/**
	 * The starting line of the range.
	 */
	startLine: number;
}

/**
 * Possible further actions the integrator can perform
 */
export interface CheckRunAction {
	/**
	 * A short explanation of what this action would do.
	 */
	description: string;

	/**
	 * A reference for the action on the integrator's system.
	 */
	identifier: string;

	/**
	 * The text to be displayed on a button in the web UI.
	 */
	label: string;
}

/**
 * The filters that are available when fetching check runs
 */
export interface CheckRunFilter {
	/**
	 * Filters the check runs created by this application ID.
	 */
	appId?: Nullable<number>;

	/**
	 * Filters the check runs by this name.
	 */
	checkName?: Nullable<string>;

	/**
	 * Filters the check runs by this type.
	 */
	checkType?: Nullable<CheckRunType>;

	/**
	 * Filters the check runs by this status.
	 */
	status?: Nullable<CheckStatusState>;
}

/**
 * Descriptive details about the check run
 */
export interface CheckRunOutput {
	/**
	 * The annotations that are made as part of the check run.
	 */
	annotations?: Nullable<CheckAnnotationData[]>;

	/**
	 * Images attached to the check run output displayed in the GitHub pull request UI.
	 */
	images?: Nullable<CheckRunOutputImage[]>;

	/**
	 * The summary of the check run (supports Commonmark).
	 */
	summary: string;

	/**
	 * The details of the check run (supports Commonmark).
	 */
	text?: Nullable<string>;

	/**
	 * A title to provide for this check run.
	 */
	title: string;
}

/**
 * Images attached to the check run output displayed in the GitHub pull request UI
 */
export interface CheckRunOutputImage {
	/**
	 * The alternative text for the image.
	 */
	alt: string;

	/**
	 * A short image description.
	 */
	caption?: Nullable<string>;

	/**
	 * The full URL of the image.
	 */
	imageUrl: string;
}

/**
 * The auto-trigger preferences that are available for check suites
 */
export interface CheckSuiteAutoTriggerPreference extends Node<'appId'> {
	/**
	 * Set to `true` to enable automatic creation of CheckSuite events upon pushes to the
	 * repository.
	 */
	setting: boolean;
}

/**
 * The filters that are available when fetching check suites
 */
export interface CheckSuiteFilter {
	/**
	 * Filters the check suites created by this application ID.
	 */
	appId?: Nullable<number>;

	/**
	 * Filters the check suites by this name.
	 */
	checkName?: Nullable<string>;
}

export type ClearLabelsFromLabelableInput = InputObject & Node<'labelableId'>;

export interface CloneProjectInput extends InputObject, Node<'sourceId' | 'targetOwnerId'> {
	/**
	 * The description of the project.
	 */
	body?: Nullable<string>;

	/**
	 * Whether or not to clone the source project's workflows.
	 */
	includeWorkflows: boolean;

	/**
	 * The name of the project.
	 */
	name: string;

	/**
	 * The visibility of the project, defaults to false (private).
	 */
	public?: Nullable<boolean>;
}

export interface CloneTemplateRepositoryInput extends InputObject, Node<'repositoryId' | 'ownerId'> {
	/**
	 * A short description of the new repository.
	 */
	description?: Nullable<string>;

	/**
	 * Whether to copy all branches from the template to the new repository. Defaults
	 * to copying only the default branch of the template.
	 */
	includeAllBranches?: Nullable<boolean>;

	/**
	 * The name of the new repository.
	 */
	name: string;

	/**
	 * Indicates the repository's visibility level.
	 */
	visibility: RepositoryVisibility;
}

export type CloseIssueInput = InputObject & Node<'issueId'>;

export type ClosePullRequestInput = InputObject & Node<'pullRequestId'>;

/**
 * Specifies an author for filtering Git commits
 */
export interface CommitAuthor {
	/**
	 * Email addresses to filter by. Commits authored by any of the specified email addresses will
	 * be returned.
	 */
	emails?: Nullable<string[]>;

	/**
	 * ID of a User to filter by. If non-null, only commits authored by this user
	 * will be returned. This field takes precedence over emails.
	 */
	id?: Nullable<string>;
}

export type CommitContributionOrder = Orderable<CommitContributionOrderField>;

export interface ContributionOrder {
	/**
	 * The ordering direction.
	 */
	direction: OrderDirection;
}

export interface ConvertProjectCardNoteToIssueInput extends InputObject, Node<'repositoryId' | 'projectCardId'> {
	/**
	 * The body of the newly created issue.
	 */
	body?: Nullable<string>;

	/**
	 * The title of the newly created issue. Defaults to the card's note text.
	 */
	title?: Nullable<string>;
}

export interface CreateBranchProtectionRuleInput extends InputObject, Node<'repositoryId'> {
	/**
	 * Can this branch be deleted.
	 */
	allowsDeletions?: Nullable<boolean>;

	/**
	 * Are force pushes allowed on this branch.
	 */
	allowsForcePushes?: Nullable<boolean>;

	/**
	 * Will new commits pushed to matching branches dismiss pull request review approvals.
	 */
	dismissesStaleReviews?: Nullable<boolean>;

	/**
	 * Can admins overwrite branch protection.
	 */
	isAdminEnforced?: Nullable<boolean>;

	/**
	 * The glob-like pattern used to determine matching branches.
	 */
	pattern: string;

	/**
	 * A list of User, Team or App IDs allowed to push to matching branches.
	 */
	pushActorIds?: Nullable<string[]>;

	/**
	 * Number of approving reviews required to update matching branches.
	 */
	requiredApprovingReviewCount?: Nullable<number>;

	/**
	 * List of required status check contexts that must pass for commits to be accepted to matching
	 * branches.
	 */
	requiredStatusCheckContexts?: Nullable<string[]>;

	/**
	 * Are approving reviews required to update matching branches.
	 */
	requiresApprovingReviews?: Nullable<boolean>;

	/**
	 * Are reviews from code owners required to update matching branches.
	 */
	requiresCodeOwnerReviews?: Nullable<boolean>;

	/**
	 * Are commits required to be signed.
	 */
	requiresCommitSignatures?: Nullable<boolean>;

	/**
	 * Are merge commits prohibited from being pushed to this branch.
	 */
	requiresLinearHistory?: Nullable<boolean>;

	/**
	 * Are status checks required to update matching branches.
	 */
	requiresStatusChecks?: Nullable<boolean>;

	/**
	 * Are branches required to be up to date before merging.
	 */
	requiresStrictStatusChecks?: Nullable<boolean>;

	/**
	 * Is pushing to matching branches restricted.
	 */
	restrictsPushes?: Nullable<boolean>;

	/**
	 * Is dismissal of pull request reviews restricted.
	 */
	restrictsReviewDismissals?: Nullable<boolean>;

	/**
	 * A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching
	 * branches.
	 */
	reviewDismissalActorIds?: Nullable<string[]>;
}

export interface CreateCheckRunInput extends InputObject, Node<'repositoryId'> {
	/**
	 * Possible further actions the integrator can perform, which a user may trigger.
	 */
	actions?: Nullable<CheckRunAction[]>;

	/**
	 * The time that the check run finished.
	 */
	completedAt?: Nullable<string>;

	/**
	 * The final conclusion of the check.
	 */
	conclusion?: Nullable<CheckConclusionState>;

	/**
	 * The URL of the integrator's site that has the full details of the check.
	 */
	detailsUrl?: Nullable<string>;

	/**
	 * A reference for the run on the integrator's system.
	 */
	externalId?: Nullable<string>;

	/**
	 * The SHA of the head commit.
	 */
	headSha: string;

	/**
	 * The name of the check.
	 */
	name: string;

	/**
	 * Descriptive details about the run.
	 */
	output?: Nullable<CheckRunOutput>;

	/**
	 * The time that the check run began.
	 */
	startedAt?: Nullable<string>;

	/**
	 * The current status.
	 */
	status?: Nullable<RequestableCheckStatusState>;
}

export interface CreateCheckSuiteInput extends InputObject, Node<'repositoryId'> {
	/**
	 * The SHA of the head commit.
	 */
	headSha: string;
}

export interface CreateContentAttachmentInput extends InputObject, Node<'contentReferenceId'> {
	/**
	 * The body of the content attachment, which may contain markdown.
	 */
	body: string;

	/**
	 * The title of the content attachment.
	 */
	title: string;
}

export interface CreateDeploymentInput extends InputObject, Node<'repositoryId' | 'refId'> {
	/**
	 * Attempt to automatically merge the default branch into the requested ref.
	 *
	 * @defaultValue true
	 */
	autoMerge?: Nullable<boolean>;

	/**
	 * Short description of the deployment.
	 */
	description?: Nullable<string>;

	/**
	 * Name for the target deployment environment.
	 */
	environment?: Nullable<string>;

	/**
	 * JSON payload with extra information about the deployment.
	 */
	payload?: Nullable<string>;

	/**
	 * The status contexts to verify against commit status checks. To bypass required contexts, pass
	 * an empty array.
	 *
	 * @defaultValue All unique contexts
	 */
	requiredContexts?: Nullable<string[]>;

	/**
	 * Specifies a task to execute.
	 */
	task?: Nullable<string>;
}

export interface CreateDeploymentStatusInput extends Node<'deploymentId'> {
	/**
	 * Adds a new inactive status to all non-transient, non-production environment deployments with
	 * the same repository and environment name as the created status's deployment.
	 */
	autoInactive?: Nullable<boolean>;

	/**
	 * A short description of the status. Maximum length of 140 characters.
	 */
	description?: Nullable<string>;

	/**
	 * If provided, updates the environment of the deploy. Otherwise, does not modify the
	 * environment.
	 */
	environment?: Nullable<string>;

	/**
	 * Sets the URL for accessing your environment.
	 */
	environmentUrl?: Nullable<string>;

	/**
	 * The log URL to associate with this status. This URL should contain output to keep the user
	 * updated while the task is running or serve as historical information for what happened in
	 * the deployment.
	 */
	logUrl?: Nullable<string>;

	/**
	 * The state of the deployment.
	 */
	state: DeploymentStatusState;
}

export interface CreateEnterpriseOrganizationInput extends InputObject, Node<'enterpriseId'> {
	/**
	 * The logins for the administrators of the new organization.
	 */
	adminLogins: string[];

	/**
	 * The email used for sending billing receipts.
	 */
	billingEmail: string;

	/**
	 * The login of the new organization.
	 */
	login: string;

	/**
	 * The profile name of the new organization.
	 */
	profileName: string;
}

export interface CreateIpAllowListEntryInput extends InputObject, Node<'ownerId'> {
	/**
	 * An IP address or range of addresses in CIDR notation.
	 */
	allowListValue: string;

	/**
	 * Whether the IP allow list entry is active when an IP allow list is enabled.
	 */
	isActive: boolean;

	/**
	 * An optional name for the IP allow list entry.
	 */
	name?: Nullable<string>;
}

export interface CreateIssueInput extends InputObject, Node<'repositoryId'> {
	/**
	 * The Node ID for the user assignee for this issue.
	 */
	assigneeIds?: Nullable<string[]>;

	/**
	 * The body for the issue description.
	 */
	body?: Nullable<string>;

	/**
	 * The name of an issue template in the repository, assigns labels and assignees from the
	 * template to the issue
	 */
	issueTemplate?: Nullable<string>;

	/**
	 * An array of Node IDs of labels for this issue.
	 */
	labelIds?: Nullable<string[]>;

	/**
	 * The Node ID of the milestone for this issue.
	 */
	milestoneId?: Nullable<string>;

	/**
	 * An array of Node IDs for projects associated with this issue.
	 */
	projectIds?: Nullable<string[]>;

	/**
	 * The title for the issue.
	 */
	title: string;
}

export interface CreateLabelInput extends InputObject, Node<'repositoryId'> {
	/**
	 * A 6 character hex code, without the leading #, identifying the color of the label.
	 */
	color: string;

	/**
	 * A brief description of the label, such as its purpose.
	 */
	description?: Nullable<string>;

	/**
	 * The name of the label.
	 */
	name: string;
}

export interface CreateProjectInput extends InputObject, Node<'ownerId'> {
	/**
	 * The description of project.
	 */
	body?: Nullable<string>;

	/**
	 * The name of project.
	 */
	name: string;

	/**
	 * A list of repository IDs to create as linked repositories for the project
	 */
	repositoryIds?: Nullable<string[]>;

	/**
	 * The name of the GitHub-provided template.
	 */
	template?: Nullable<ProjectTemplate>;
}

export interface CreatePullRequestInput extends InputObject, Node<'repositoryId'> {
	/**
	 * The name of the branch you want your changes pulled into. This should be an existing branch
	 * on the current repository. You cannot update the base branch on a pull request to point
	 * to another repository.
	 */
	baseRefName: string;

	/**
	 * The contents of the pull request.
	 */
	body?: Nullable<string>;

	/**
	 * Indicates whether this pull request should be a draft.
	 */
	draft?: Nullable<boolean>;

	/**
	 * The name of the branch where your changes are implemented. For cross-repository pull requests
	 * in the same network, namespace `head_ref_name` with a user like this: `username:branch`.
	 */
	headRefName: string;

	/**
	 * Indicates whether maintainers can modify the pull request.
	 */
	maintainerCanModify?: Nullable<boolean>;

	/**
	 * The title of the pull request.
	 */
	title: string;
}

export interface CreateRefInput extends InputObject, Node<'repositoryId'> {
	/**
	 * The fully qualified name of the new Ref.
	 */
	name: string;

	/**
	 * The GitObjectID that the new Ref shall target. Must point to a commit.
	 */
	oid: string;
}

export interface CreateRepositoryInput extends InputObject {
	/**
	 * A short description of the new repository.
	 */
	description?: Nullable<string>;

	/**
	 * Indicates if the repository should have the issues feature enabled.
	 */
	hasIssuesEnabled?: Nullable<boolean>;

	/**
	 * Indicates if the repository should have the wiki feature enabled.
	 */
	hasWikiEnabled?: Nullable<boolean>;

	/**
	 * The URL for a web page about this repository.
	 */
	homepageUrl?: Nullable<string>;

	/**
	 * The name of the new repository.
	 */
	name: string;

	/**
	 * The ID of the owner for the new repository.
	 */
	ownerId?: Nullable<string>;

	/**
	 * When an organization is specified as the owner, this ID identifies the team
	 * that should be granted access to the new repository.
	 */
	teamId?: Nullable<string>;

	/**
	 * Whether this repository should be marked as a template such that anyone who
	 * can access it can create new repositories with the same files and directory structure.
	 */
	template?: Nullable<boolean>;

	/**
	 * Indicates the repository's visibility level.
	 */
	visibility: RepositoryVisibility;
}

export interface CreateTeamDiscussionCommentInput extends InputObject, Node<'discussionId'> {
	/**
	 * The content of the comment.
	 */
	body: string;
}

export interface CreateTeamDiscussionInput extends InputObject, Node<'teamId'> {
	/**
	 * The content of the discussion.
	 */
	body: string;

	/**
	 * If true, restricts the visibility of this discussion to team members and
	 * organization admins. If false or not specified, allows any organization member
	 * to view this discussion.
	 */
	private?: Nullable<boolean>;

	/**
	 * The title of the discussion.
	 */
	title: string;
}

export interface DeclineTopicSuggestionInput extends InputObject, Node<'repositoryId'> {
	/**
	 * The name of the suggested topic.
	 */
	name: string;

	/**
	 * The reason why the suggested topic is declined.
	 */
	reason: TopicSuggestionDeclineReason;
}

export type DeleteBranchProtectionRuleInput = InputObject & Node<'branchProtectionRuleId'>;

export type DeleteDeploymentInput = InputObject & Node;

export type DeleteIpAllowListEntryInput = InputObject & Node<'ipAllowListEntryId'>;

export type DeleteIssueCommentInput = InputObject & Node;

export type DeleteIssueInput = InputObject & Node<'issueId'>;

export type DeleteLabelInput = InputObject & Node;

export type DeletePackageVersionInput = InputObject & Node<'packageVersionId'>;

export type DeleteProjectCardInput = InputObject & Node<'cardId'>;

export type DeleteProjectColumnInput = InputObject & Node<'columnId'>;

export type DeleteProjectInput = InputObject & Node<'projectId'>;

export type DeletePullRequestReviewCommentInput = InputObject & Node;

export type DeletePullRequestReviewInput = InputObject & Node<'pullRequestReviewId'>;

export type DeleteRefInput = InputObject & Node<'refId'>;

export type DeleteTeamDiscussionCommentInput = InputObject & Node;

export type DeleteTeamDiscussionInput = InputObject & Node;

export type DeleteVerifiableDomainInput = InputObject & Node;

export type DeploymentOrder = Orderable<DeploymentOrderField>;

export type DisablePullRequestAutoMergeInput = InputObject & Node<'pullRequestId'>;

export interface DismissPullRequestReviewInput extends InputObject, Node<'pullRequestReviewId'> {
	/**
	 * The contents of the pull request review dismissal message.
	 */
	message: string;
}

/**
 * Specifies a review comment to be left with a Pull Request Review
 */
export interface DraftPullRequestReviewComment {
	/**
	 * Body of the comment to leave.
	 */
	body: string;

	/**
	 * Path to the file being commented on.
	 */
	path: string;

	/**
	 * Position in the file to leave a comment on.
	 */
	position: number;
}

/**
 * Specifies a review comment thread to be left with a Pull Request Review
 */
export interface DraftPullRequestReviewThread {
	/**
	 * Body of the comment to leave.
	 */
	body: string;

	/**
	 * The line of the blob to which the thread refers. The end of the line range for multi-line
	 * comments.
	 */
	line: number;

	/**
	 * Path to the file being commented on.
	 */
	path: string;

	/**
	 * The side of the diff on which the line resides. For multi-line comments, this is the side
	 * for the end of the line range.
	 */
	side?: Nullable<DiffSide>;

	/**
	 * The first line of the range to which the comment refers.
	 */
	startLine?: Nullable<number>;

	/**
	 * The side of the diff on which the start line resides.
	 */
	startSide?: Nullable<DiffSide>;
}

export interface EnablePullRequestAutoMergeInput extends InputObject, Node<'pullRequestId'> {
	/**
	 * The email address to associate with this merge.
	 */
	authorEmail?: Nullable<string>;

	/**
	 * Commit body to use for the commit when the PR is mergable; if omitted, a default message will
	 * be used.
	 */
	commitBody?: Nullable<string>;

	/**
	 * Commit headline to use for the commit when the PR is mergable; if omitted, a default message
	 * will be used.
	 */
	commitHeadline?: Nullable<string>;

	/**
	 * The merge method to use.
	 *
	 * @defaultValue MERGE
	 */
	mergeMethod?: Nullable<PullRequestMergeMethod>;
}

export type EnterpriseAdministratorInvitationOrder = Orderable<EnterpriseAdministratorInvitationOrderField>;

export type EnterpriseMemberOrder = Orderable<EnterpriseMemberOrderField>;

export type EnterpriseServerInstallationOrder = Orderable<EnterpriseServerInstallationOrderField>;

export type EnterpriseServerUserAccountEmailOrder = Orderable<EnterpriseServerUserAccountEmailOrderField>;

export type EnterpriseServerUserAccountOrder = Orderable<EnterpriseServerUserAccountOrderField>;

export type EnterpriseServerUserAccountsUploadOrder = Orderable<EnterpriseServerUserAccountsUploadOrderField>;

export type FollowUserInput = InputObject & Node<'userId'>;

export type GistOrder = Orderable<GistOrderField>;

export interface ImportProjectInput extends InputObject {
	/**
	 * The description of the Project.
	 */
	body?: Nullable<string>;

	/**
	 * A list of columns containing issues and pull requests.
	 */
	columnImports?: Nullable<ProjectColumnImport[]>;

	/**
	 * The name of the Project.
	 */
	name: string;

	/**
	 * The name of the Organization or User to create the Project under.
	 */
	ownerName: string;

	/**
	 * Whether the Project is public or not.
	 */
	public?: Nullable<boolean>;
}

export interface InviteEnterpriseAdminInput extends InputObject, Node<'enterpriseId'> {
	/**
	 * The email of the person to invite as an administrator.
	 */
	email?: Nullable<string>;

	/**
	 * The login of a user to invite as an administrator.
	 */
	invitee?: Nullable<string>;

	/**
	 * The role of the administrator.
	 */
	role?: Nullable<EnterpriseAdministratorRole>;
}

export type IpAllowListEntryOrder = Orderable<IpAllowListEntryOrderField>;

export type IssueCommentOrder = Orderable<IssueCommentOrderField>;

/**
 * Ways in which to filter lists of issues
 */
export interface IssueFilters {
	/**
	 * List issues assigned to given name. Pass in `null` for issues with no assigned
	 * user, and `*` for issues assigned to any user.
	 */
	assignee?: Nullable<string>;

	/**
	 * List issues created by given name.
	 */
	createdBy?: Nullable<string>;

	/**
	 * List issues where the list of label names exist on the issue.
	 */
	labels?: Nullable<string[]>;

	/**
	 * List issues where the given name is mentioned in the issue.
	 */
	mentioned?: Nullable<string>;

	/**
	 * List issues by given milestone argument. If an string representation of an
	 * integer is passed, it should refer to a milestone by its number field. Pass in
	 * `null` for issues with no milestone, and `*` for issues that are assigned to any milestone.
	 */
	milestone?: Nullable<string>;

	/**
	 * List issues that have been updated at or after the given date.
	 */
	since?: Nullable<string>;

	/**
	 * List issues filtered by the list of states given.
	 */
	states?: Nullable<IssueState[]>;

	/**
	 * List issues subscribed to by viewer.
	 */
	viewerSubscribed?: Nullable<boolean>;
}

export type IssueOrder = Orderable<IssueOrderField>;

export type LabelOrder = Orderable<LabelOrderField>;

export type LanguageOrder = Orderable<LanguageOrderField>;

export type LinkRepositoryToProjectInput = InputObject & Node<'repositoryId' | 'projectId'>;

export interface LockLockableInput extends InputObject, Node<'lockableId'> {
	/**
	 * A reason for why the item will be locked.
	 */
	lockReason?: Nullable<LockReason>;
}

export interface MarkFileAsViewedInput extends InputObject, Node<'pullRequestId'> {
	/**
	 * The path of the file to mark as viewed
	 */
	path: string;
}

export type MarkPullRequestReadyForReviewInput = InputObject & Node<'pullRequestId'>;

export interface MergeBranchInput extends InputObject, Node<'repositoryId'> {
	/**
	 * The email address to associate with this commit.
	 */
	authorEmail?: Nullable<string>;

	/**
	 * The name of the base branch that the provided head will be merged into.
	 */
	base: string;

	/**
	 * Message to use for the merge commit. If omitted, a default will be used.
	 */
	commitMessage?: Nullable<string>;

	/**
	 * The head to merge into the base branch. This can be a branch name or a commit GitObjectID.
	 */
	head: string;
}

export interface MergePullRequestInput extends InputObject, Node<'pullRequestId'> {
	/**
	 * The email address to associate with this merge.
	 */
	authorEmail?: Nullable<string>;

	/**
	 * Commit body to use for the merge commit; if omitted, a default message will be used
	 */
	commitBody?: Nullable<string>;

	/**
	 * Commit headline to use for the merge commit; if omitted, a default message will be used.
	 */
	commitHeadline?: Nullable<string>;

	/**
	 * OID that the pull request head ref must match to allow merge; if omitted, no check is
	 * performed.
	 */
	expectedHeadOid?: Nullable<string>;

	/**
	 * The merge method to use.
	 *
	 * @defaultValue MERGE
	 */
	mergeMethod?: Nullable<PullRequestMergeMethod>;
}

export type MilestoneOrder = Orderable<MilestoneOrderField>;

export interface MinimizeCommentInput extends InputObject, Node<'subjectId'> {
	/**
	 * The classification of comment
	 */
	classifier: ReportedContentClassifiers;
}

export interface MoveProjectCardInput extends InputObject, Node<'cardId' | 'columnId'> {
	/**
	 * Place the new card after the card with this id. Pass null to place it at the top.
	 */
	afterCardId?: Nullable<string>;
}

export interface MoveProjectColumnInput extends InputObject, Node<'columnId'> {
	/**
	 * Place the new column after the column with this ID. Pass null to place it at the front.
	 */
	afterColumnId?: Nullable<string>;
}

export type OrganizationOrder = Orderable<OrganizationOrderField>;

export type PackageFileOrder = Orderable<PackageFileOrderField>;

export type PackageOrder = Orderable<PackageOrderField>;

export type PackageVersionOrder = Orderable<PackageVersionOrderField>;

export type PinIssueInput = InputObject & Node<'issueId'>;

/**
 * An issue or PR and its owning repository to be used in a project card.
 */
export interface ProjectCardImport {
	/**
	 * The issue or pull request number.
	 */
	number: number;

	/**
	 * Repository name with owner (owner/repository).
	 */
	repository: string;
}

/**
 * A project column and a list of its issues and PRs.
 */
export interface ProjectColumnImport {
	/**
	 * The name of the column.
	 */
	columnName: string;

	/**
	 * A list of issues and pull requests in the column.
	 */
	issues?: Nullable<ProjectCardImport[]>;

	/**
	 * The position of the column, starting from 0.
	 */
	position: number;
}

export type ProjectOrder = Orderable<ProjectOrderField>;

export type PullRequestOrder = Orderable<PullRequestOrderField>;

export type ReactionOrder = Orderable<ReactionOrderField>;

export type RefOrder = Orderable<RefOrderField>;

/**
 * A ref update.
 */
export interface RefUpdate {
	/**
	 * The value this ref should be updated to.
	 */
	afterOid: string;

	/**
	 * The value this ref needs to point to before the update.
	 */
	beforeOid: string;

	/**
	 * Force a non fast-forward update.
	 */
	force?: Nullable<boolean>;

	/**
	 * The fully qualified name of the ref to be update.
	 */
	name: string;
}

export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = InputObject & Node<'enterpriseId'>;

export type RegenerateVerifiableDomainTokenInput = InputObject & Node;

export type ReleaseOrder = Orderable<ReleaseOrderField>;

export interface RemoveAssigneesFromAssignableInput extends InputObject, Node<'assignableId'> {
	/**
	 * The id of users to remove as assignees.
	 */
	assigneeIds: string[];
}

export interface RemoveEnterpriseAdminInput extends InputObject, Node<'enterpriseId'> {
	/**
	 * The login of the user to remove as an administrator.
	 */
	login: string;
}

export type RemoveEnterpriseIdentityProviderInput = InputObject & Node<'enterpriseId'>;

export type RemoveEnterpriseOrganizationInput = InputObject & Node<'enterpriseId' | 'organizationId'>;

export interface RemoveEnterpriseSupportEntitlementInput extends InputObject, Node<'enterpriseId'> {
	/**
	 * The login of a member who will lose the support entitlement.
	 */
	login: string;
}

export interface RemoveLabelsFromLabelableInput extends InputObject, Node<'labelableId'> {
	/**
	 * The IDs of labels to remove.
	 */
	labelIds: string[];
}

export type RemoveOutsideCollaboratorInput = InputObject & Node<'organizationId' | 'userId'>;

export interface RemoveReactionInput extends InputObject, Node<'subjectId'> {
	/**
	 * The name of the emoji reaction to remove.
	 */
	content: ReactionContent;
}

export type RemoveStarInput = InputObject & Node<'starrableId'>;

export type ReopenIssueInput = InputObject & Node<'issueId'>;

export type ReopenPullRequestInput = InputObject & Node<'pullRequestId'>;

export type RepositoryInvitationOrder = Orderable<RepositoryInvitationOrderField>;

export type RepositoryOrder = Orderable<RepositoryOrderField>;

export interface RequestReviewsInput extends InputObject, Node<'pullRequestId'> {
	/**
	 * The Node IDs of the team to request.
	 */
	teamIds?: Nullable<string[]>;

	/**
	 * Add users to the set rather than replace.
	 */
	union?: Nullable<boolean>;

	/**
	 * The Node IDs of the user to request.
	 */
	userIds?: Nullable<string[]>;
}

export type RerequestCheckSuiteInput = InputObject & Node<'repositoryId' | 'checkSuiteId'>;

export type ResolveReviewThreadInput = InputObject & Node<'threadId'>;

export type SavedReplyOrder = Orderable<SavedReplyOrderField>;

/**
 * An advisory identifier to filter results on.
 */
export interface SecurityAdvisoryIdentifierFilter {
	/**
	 * The identifier type.
	 */
	type: SecurityAdvisoryIdentifierType;

	/**
	 * The identifier string. Supports exact or partial matching.
	 */
	value: string;
}

export type SecurityAdvisoryOrder = Orderable<SecurityAdvisoryOrderField>;

export type SecurityVulnerabilityOrder = Orderable<SecurityVulnerabilityOrderField>;

export interface SetEnterpriseIdentityProviderInput extends InputObject, Node<'enterpriseId'> {
	/**
	 * The digest algorithm used to sign SAML requests for the identity provider.
	 */
	digestMethod: SAMLDigestAlgorithm;

	/**
	 * The x509 certificate used by the identity provider to sign assertions and responses.
	 */
	idpCertificate: string;

	/**
	 * The Issuer Entity ID for the SAML identity provider
	 */
	issuer?: Nullable<string>;

	/**
	 * The signature algorithm used to sign SAML requests for the identity provider.
	 */
	signatureMethod: SAMLSignatureAlgorithm;

	/**
	 * The URL endpoint for the identity provider's SAML SSO.
	 */
	ssoUrl: string;
}

export interface SetOrganizationInteractionLimitInput extends InputObject, Node<'organizationId'> {
	/**
	 * When this limit should expire.
	 */
	expiry?: Nullable<RepositoryInteractionLimitExpiry>;

	/**
	 * The limit to set.
	 */
	limit: RepositoryInteractionLimit;
}

export interface SetRepositoryInteractionLimitInput extends InputObject, Node<'repositoryId'> {
	/**
	 * When this limit should expire.
	 */
	expiry?: Nullable<RepositoryInteractionLimitExpiry>;

	/**
	 * The limit to set.
	 */
	limit: RepositoryInteractionLimit;
}

export interface SetUserInteractionLimitInput extends InputObject, Node<'userId'> {
	/**
	 * When this limit should expire.
	 */
	expiry?: Nullable<RepositoryInteractionLimitExpiry>;

	/**
	 * The limit to set.
	 */
	limit: RepositoryInteractionLimit;
}

export type SponsorableOrder = Orderable<SponsorableOrderField>;

export type SponsorsTierOrder = Orderable<SponsorsTierOrderField>;

export type SponsorshipOrder = Orderable<SponsorshipOrderField>;

export type StarOrder = Orderable<StarOrderField>;

export interface SubmitPullRequestReviewInput extends InputObject {
	/**
	 * The text field to set on the Pull Request Review.
	 */
	body?: Nullable<string>;

	/**
	 * The event to send to the Pull Request Review.
	 */
	event: PullRequestReviewEvent;

	/**
	 * The Pull Request ID to submit any pending reviews.
	 */
	pullRequestId?: Nullable<string>;

	/**
	 * The Pull Request Review ID to submit.
	 */
	pullRequestReviewId?: Nullable<string>;
}

export type TeamDiscussionCommentOrder = Orderable<TeamDiscussionCommentOrderField>;

export type TeamDiscussionOrder = Orderable<TeamDiscussionOrderField>;

export type TeamMemberOrder = Orderable<TeamMemberOrderField>;

export type TeamOrder = Orderable<TeamOrderField>;

export type TeamRepositoryOrder = Orderable<TeamRepositoryOrderField>;

export type TransferIssueInput = InputObject & Node<'repositoryId' | 'issueId'>;

export type UnarchiveRepositoryInput = InputObject & Node<'repositoryId'>;

export type UnfollowUserInput = InputObject & Node<'userId'>;

export type UnlinkRepositoryFromProjectInput = InputObject & Node<'repositoryId' | 'projectId'>;

export type UnlockLockableInput = InputObject & Node<'lockableId'>;

export interface UnmarkFileAsViewedInput extends Node<'pullRequestId'> {
	/**
	 * The path of the file to mark as unviewed
	 */
	path: string;
}

export type UnmarkIssueAsDuplicateInput = InputObject & Node<'canonicalId' | 'duplicateId'>;

export type UnminimizeCommentInput = InputObject & Node<'subjectId'>;

export type UnpinIssueInput = InputObject & Node<'issueId'>;

export type UnresolveReviewThreadInput = InputObject & Node<'threadId'>;

export interface UpdateBranchProtectionRuleInput extends InputObject, Node<'branchProtectionRuleId'> {
	/**
	 * Can this branch be deleted.
	 */
	allowsDeletions?: Nullable<boolean>;

	/**
	 * Are force pushes allowed on this branch.
	 */
	allowsForcePushes?: Nullable<boolean>;

	/**
	 * Will new commits pushed to matching branches dismiss pull request review approvals.
	 */
	dismissesStaleReviews?: Nullable<boolean>;

	/**
	 * Can admins overwrite branch protection.
	 */
	isAdminEnforced?: Nullable<boolean>;

	/**
	 * The glob-like pattern used to determine matching branches.
	 */
	pattern?: Nullable<string>;

	/**
	 * A list of User, Team or App IDs allowed to push to matching branches.
	 */
	pushActorIds?: Nullable<string[]>;

	/**
	 * Number of approving reviews required to update matching branches.
	 */
	requiredApprovingReviewCount?: Nullable<number>;

	/**
	 * List of required status check contexts that must pass for commits to be accepted to
	 * matching branches.
	 */
	requiredStatusCheckContexts?: Nullable<string[]>;

	/**
	 * Are approving reviews required to update matching branches.
	 */
	requiresApprovingReviews?: Nullable<boolean>;

	/**
	 * Are reviews from code owners required to update matching branches.
	 */
	requiresCodeOwnerReviews?: Nullable<boolean>;

	/**
	 * Are commits required to be signed.
	 */
	requiresCommitSignatures?: Nullable<boolean>;

	/**
	 * Are merge commits prohibited from being pushed to this branch.
	 */
	requiresLinearHistory?: Nullable<boolean>;

	/**
	 * Are status checks required to update matching branches.
	 */
	requiresStatusChecks?: Nullable<boolean>;

	/**
	 * Are branches required to be up to date before merging.
	 */
	requiresStrictStatusChecks?: Nullable<boolean>;

	/**
	 * Is pushing to matching branches restricted.
	 */
	restrictsPushes?: Nullable<boolean>;

	/**
	 * Is dismissal of pull request reviews restricted.
	 */
	restrictsReviewDismissals?: Nullable<boolean>;

	/**
	 * A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching
	 * branches.
	 */
	reviewDismissalActorIds?: Nullable<string[]>;
}

export interface UpdateCheckRunInput extends InputObject, Node<'repositoryId' | 'checkRunId'> {
	/**
	 * Possible further actions the integrator can perform, which a user may trigger.
	 */
	actions?: Nullable<CheckRunAction[]>;

	/**
	 * The time that the check run finished.
	 */
	completedAt?: Nullable<string>;

	/**
	 * The final conclusion of the check.
	 */
	conclusion?: Nullable<CheckConclusionState>;

	/**
	 * The URL of the integrator's site that has the full details of the check.
	 */
	detailsUrl?: Nullable<string>;

	/**
	 * A reference for the run on the integrator's system.
	 */
	externalId?: Nullable<string>;

	/**
	 * The name of the check.
	 */
	name?: Nullable<string>;

	/**
	 * Descriptive details about the run.
	 */
	output?: Nullable<CheckRunOutput>;

	/**
	 * The time that the check run began.
	 */
	startedAt?: Nullable<string>;

	/**
	 * The current status.
	 */
	status?: Nullable<RequestableCheckStatusState>;
}

export interface UpdateCheckSuitePreferencesInput extends InputObject, Node<'repositoryId'> {
	/**
	 * The check suite preferences to modify.
	 */
	autoTriggerPreferences: CheckSuiteAutoTriggerPreference[];
}

export interface UpdateEnterpriseAdministratorRoleInput extends InputObject, Node<'enterpriseId'> {
	/**
	 * The login of a administrator whose role is being changed.
	 */
	login: string;

	/**
	 * The new role for the Enterprise administrator.
	 */
	role: EnterpriseAdministratorRole;
}

// SECTION Update Enterprise Inputs

interface UpdateEnterpriseInput<T = EnterpriseEnabledDisabledSettingValue> extends InputObject, Node<'enterpriseId'> {
	settingValue: T;
}

export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = UpdateEnterpriseInput;

/* prettier-ignore */
export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = UpdateEnterpriseInput<
	EnterpriseDefaultRepositoryPermissionSettingValue
>;

export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = UpdateEnterpriseInput;

export interface UpdateEnterpriseMembersCanCreateRepositoriesSettingInput extends InputObject, Node<'enterpriseId'> {
	/**
	 * Allow members to create internal repositories. Defaults to current value.
	 */
	membersCanCreateInternalRepositories?: Nullable<boolean>;

	/**
	 * Allow members to create private repositories. Defaults to current value.
	 */
	membersCanCreatePrivateRepositories?: Nullable<boolean>;

	/**
	 * Allow members to create public repositories. Defaults to current value.
	 */
	membersCanCreatePublicRepositories?: Nullable<boolean>;

	/**
	 * When false, allow member organizations to set their own repository creation member
	 * privileges.
	 */
	membersCanCreateRepositoriesPolicyEnabled?: Nullable<boolean>;

	/**
	 * Value for the members can create repositories setting on the enterprise. This
	 * or the granular public/private/internal allowed fields (but not both) must be provided.
	 */
	settingValue?: Nullable<EnterpriseMembersCanCreateRepositoriesSettingValue>;
}

export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = UpdateEnterpriseInput;

export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = UpdateEnterpriseInput;

export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = UpdateEnterpriseInput;

/* prettier-ignore */
export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = UpdateEnterpriseInput<
	EnterpriseMembersCanMakePurchasesSettingValue
>;

export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = UpdateEnterpriseInput;

export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = UpdateEnterpriseInput;

export type UpdateEnterpriseOrganizationProjectsSettingInput = UpdateEnterpriseInput;

export interface UpdateEnterpriseProfileInput extends InputObject, Node<'enterpriseId'> {
	/**
	 * The description of the enterprise.
	 */
	description?: Nullable<string>;

	/**
	 * The location of the enterprise.
	 */
	location?: Nullable<string>;

	/**
	 * The name of the enterprise.
	 */
	name?: Nullable<string>;

	/**
	 * The URL of the enterprise's website.
	 */
	websiteUrl?: Nullable<string>;
}

export type UpdateEnterpriseRepositoryProjectsSettingInput = UpdateEnterpriseInput;

export type UpdateEnterpriseTeamDiscussionsSettingInput = UpdateEnterpriseInput;

/* prettier-ignore */
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = UpdateEnterpriseInput<
	EnterpriseEnabledSettingValue
>;

export interface UpdateIpAllowListEnabledSettingInput extends InputObject, Node<'ownerId'> {
	/**
	 * The value for the IP allow list enabled setting.
	 */
	settingValue: IpAllowListEnabledSettingValue;
}

// !SECTION

export interface UpdateIpAllowListEntryInput extends InputObject, Node<'ipAllowListEntryId'> {
	/**
	 * An IP address or range of addresses in CIDR notation.
	 */
	allowListValue: string;

	/**
	 * Whether the IP allow list entry is active when an IP allow list is enabled.
	 */
	isActive: boolean;

	/**
	 * An optional name for the IP allow list entry.
	 */
	name?: Nullable<string>;
}

export interface UpdateIssueCommentInput extends InputObject, Node {
	/**
	 * The updated text of the comment.
	 */
	body: string;
}

export interface UpdateIssueInput extends InputObject, Node {
	/**
	 * An array of Node IDs of users for this issue.
	 */
	assigneeIds?: Nullable<string[]>;

	/**
	 * The body for the issue description.
	 */
	body?: Nullable<string>;

	/**
	 * An array of Node IDs of labels for this issue.
	 */
	labelIds?: Nullable<string[]>;

	/**
	 * The Node ID of the milestone for this issue.
	 */
	milestoneId?: Nullable<string>;

	/**
	 * An array of Node IDs for projects associated with this issue.
	 */
	projectIds?: Nullable<string[]>;

	/**
	 * The desired issue state.
	 */
	state?: Nullable<IssueState>;

	/**
	 * The title for the issue.
	 */
	title?: Nullable<string>;
}

export interface UpdateLabelInput extends InputObject, Node {
	/**
	 * A 6 character hex code, without the leading #, identifying the updated color of the label.
	 */
	color?: Nullable<string>;

	/**
	 * A brief description of the label, such as its purpose.
	 */
	description?: Nullable<string>;

	/**
	 * The updated name of the label.
	 */
	name?: Nullable<string>;
}

export interface UpdateNotificationRestrictionSettingInput extends InputObject, Node<'ownerId'> {
	/**
	 * The value for the restrict notifications setting.
	 */
	settingValue: NotificationRestrictionSettingValue;
}

export interface UpdateProjectCardInput extends InputObject, Node<'projectCardId'> {
	/**
	 * Whether or not the ProjectCard should be archived
	 */
	isArchived?: Nullable<boolean>;

	/**
	 * The note of ProjectCard.
	 */
	note?: Nullable<string>;
}

export interface UpdateProjectColumnInput extends InputObject, Node<'projectColumnId'> {
	/**
	 * The name of project column.
	 */
	name: string;
}

export interface UpdateProjectInput extends InputObject, Node<'projectId'> {
	/**
	 * The description of project.
	 */
	body?: Nullable<string>;

	/**
	 * The name of project.
	 */
	name?: Nullable<string>;

	/**
	 * Whether the project is public or not.
	 */
	public?: Nullable<boolean>;

	/**
	 * Whether the project is open or closed.
	 */
	state?: Nullable<ProjectState>;
}

export interface UpdatePullRequestInput extends InputObject, Node<'pullRequestId'> {
	/**
	 * An array of Node IDs of users for this pull request.
	 */
	assigneeIds?: Nullable<string[]>;

	/**
	 * The name of the branch you want your changes pulled into. This should be an existing branch
	 * on the current repository.
	 */
	baseRefName?: Nullable<string>;

	/**
	 * The contents of the pull request.
	 */
	body?: Nullable<string>;

	/**
	 * An array of Node IDs of labels for this pull request.
	 */
	labelIds?: Nullable<string[]>;

	/**
	 * Indicates whether maintainers can modify the pull request.
	 */
	maintainerCanModify?: Nullable<boolean>;

	/**
	 * The Node ID of the milestone for this pull request.
	 */
	milestoneId?: Nullable<string>;

	/**
	 * An array of Node IDs for projects associated with this pull request.
	 */
	projectIds?: Nullable<string[]>;

	/**
	 * The target state of the pull request.
	 */
	state?: Nullable<PullRequestUpdateState>;

	/**
	 * The title of the pull request.
	 */
	title?: Nullable<string>;
}

export interface UpdatePullRequestReviewCommentInput extends InputObject, Node<'pullRequestReviewCommentId'> {
	/**
	 * The text of the comment.
	 */
	body: string;
}

export interface UpdatePullRequestReviewInput extends InputObject, Node<'pullRequestReviewId'> {
	/**
	 * The contents of the pull request review body.
	 */
	body: string;
}

export interface UpdateRefInput extends InputObject, Node<'refId'> {
	/**
	 * Permit updates of branch Refs that are not fast-forwards?
	 */
	force?: Nullable<boolean>;

	/**
	 * The GitObjectID that the Ref shall be updated to target.
	 */
	oid: string;
}

export interface UpdateRefsInput extends InputObject, Node<'repositoryId'> {
	/**
	 * A list of ref updates.
	 */
	refUpdates: RefUpdate[];
}

export interface UpdateRepositoryInput extends InputObject, Node<'repositoryId'> {
	/**
	 * A new description for the repository. Pass an empty string to erase the existing description.
	 */
	description?: Nullable<string>;

	/**
	 * Indicates if the repository should have the issues feature enabled.
	 */
	hasIssuesEnabled?: Nullable<boolean>;

	/**
	 * Indicates if the repository should have the project boards feature enabled.
	 */
	hasProjectsEnabled?: Nullable<boolean>;

	/**
	 * Indicates if the repository should have the wiki feature enabled.
	 */
	hasWikiEnabled?: Nullable<boolean>;

	/**
	 * The URL for a web page about this repository. Pass an empty string to erase the existing URL.
	 */
	homepageUrl?: Nullable<string>;

	/**
	 * The new name of the repository.
	 */
	name?: Nullable<string>;

	/**
	 * Whether this repository should be marked as a template such that anyone who
	 * can access it can create new repositories with the same files and directory structure.
	 */
	template?: Nullable<boolean>;
}

export interface UpdateSubscriptionInput extends InputObject, Node<'subscribableId'> {
	/**
	 * The new state of the subscription.
	 */
	state: SubscriptionState;
}

export interface UpdateTeamDiscussionCommentInput extends InputObject, Node {
	/**
	 * The updated text of the comment.
	 */
	body: string;

	/**
	 * The current version of the body content.
	 */
	bodyVersion?: Nullable<string>;
}

export interface UpdateTeamDiscussionInput extends InputObject, Node {
	/**
	 * The updated text of the discussion.
	 */
	body?: Nullable<string>;

	/**
	 * The current version of the body content. If provided, this update operation
	 * will be rejected if the given version does not match the latest version on the server.
	 */
	bodyVersion?: Nullable<string>;

	/**
	 * If provided, sets the pinned state of the updated discussion.
	 */
	pinned?: Nullable<boolean>;

	/**
	 * The updated title of the discussion.
	 */
	title?: Nullable<string>;
}

export interface UpdateTeamReviewAssignmentInput extends InputObject {
	/**
	 * The algorithm to use for review assignment.
	 */
	algorithm?: Nullable<TeamReviewAssignmentAlgorithm>;

	/**
	 * Turn on or off review assignment.
	 */
	enabled: boolean;

	/**
	 * An array of team member IDs to exclude.
	 */
	excludedTeamMemberIds?: Nullable<string[]>;
}

export interface UpdateTopicsInput extends InputObject, Node<'repositoryId'> {
	/**
	 * An array of topic names.
	 */
	topicNames: string[];
}

export type UserStatusOrder = Orderable<UserStatusOrderField>;

export type VerifiableDomainOrder = Orderable<VerifiableDomainOrderField>;

export type VerifyVerifiableDomainInput = InputObject & Node;
