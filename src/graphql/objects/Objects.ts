import type { Nullable } from 'extended-utility-types';
import type {
	Actor,
	Assignable,
	BranchProtectionRuleConflictConnection,
	BranchProtectionRuleConnection,
	CheckAnnotationConnection,
	CheckAnnotationLevel,
	CheckConclusionState,
	CheckRunConnection,
	CheckStatusState,
	CheckSuiteConnection,
	Closable,
	Comment,
	CommitCommentConnection,
	CommitConnection,
	CommitHistoryConnection,
	Contribution,
	ContributionLevel,
	CreatedCommitContributionConnection,
	CreatedIssueContributionConnection,
	CreatedIssueOrRestrictedContribution,
	CreatedPullRequestContributionConnection,
	CreatedPullRequestOrRestrictedContribution,
	CreatedPullRequestReviewContributionConnection,
	CreatedRepositoryContributionConnection,
	CreatedRepositoryOrRestrictedContribution,
	CWEConnection,
	DefaultRepositoryPermissionField,
	Deletable,
	DeployKeyConnection,
	DeploymentConnection,
	DeploymentState,
	DeploymentStatusConnection,
	DeploymentStatusState,
	DiffSide,
	EnterpriseAdministratorConnection,
	EnterpriseAdministratorInvitationConnection,
	EnterpriseAdministratorRole,
	EnterpriseDefaultRepositoryPermissionSettingValue,
	EnterpriseEnabledDisabledSettingValue,
	EnterpriseEnabledSettingValue,
	EnterpriseMemberConnection,
	EnterpriseMembersCanCreateRepositoriesSettingValue,
	EnterpriseMembersCanMakePurchasesSettingValue,
	EnterpriseOrganizationMembershipConnection,
	EnterpriseOutsideCollaboratorConnection,
	EnterprisePendingMemberInvitationConnection,
	EnterpriseServerInstallationConnection,
	EnterpriseServerUserAccountConnection,
	EnterpriseServerUserAccountEmailConnection,
	EnterpriseServerUserAccountsUploadConnection,
	EnterpriseServerUserAccountsUploadSyncState,
	EnterpriseUserAccountConnection,
	ExternalIdentityConnection,
	FileViewedState,
	FollowerConnection,
	FollowingConnection,
	FundingPlatform,
	GistCommentConnection,
	GistConnection,
	GitActorConnection,
	GitObject,
	GitSignature,
	HovercardContext,
	IpAllowListEnabledSettingValue,
	IpAllowListEntryConnection,
	IpAllowListOwner,
	IssueCommentConnection,
	IssueConnection,
	IssueOrPullRequest,
	IssueState,
	IssueTimelineItemsConnection,
	Labelable,
	LabelConnection,
	LanguageConnection,
	Lockable,
	MemberStatusable,
	MergeableState,
	MetaField,
	MilestoneConnection,
	MilestoneState,
	Minimizable,
	Node,
	NotificationRestrictionSettingValue,
	OrganizationAuditEntryConnection,
	OrganizationConnection,
	OrganizationInvitationConnection,
	OrganizationInvitationRole,
	OrganizationInvitationType,
	OrganizationMemberConnection,
	PackageFileConnection,
	PackageOwner,
	PackageType,
	PackageVersionConnection,
	PermissionGranter,
	PinnableItemConnection,
	PinnedIssueConnection,
	ProfileOwner,
	ProjectCardConnection,
	ProjectCardItem,
	ProjectCardState,
	ProjectColumnConnection,
	ProjectColumnPurpose,
	ProjectOwner,
	ProjectState,
	PublicKeyConnection,
	PullRequestChangedFileConnection,
	PullRequestCommitConnection,
	PullRequestConnection,
	PullRequestMergeMethod,
	PullRequestReviewCommentConnection,
	PullRequestReviewCommentState,
	PullRequestReviewConnection,
	PullRequestReviewDecision,
	PullRequestReviewState,
	PullRequestReviewThreadConnection,
	PullRequestState,
	PullRequestTimelineItemsConnection,
	PushAllowanceActor,
	PushAllowanceConnection,
	Reactable,
	ReactingUserConnection,
	ReactionContent,
	RefConnection,
	ReleaseAssetConnection,
	ReleaseConnection,
	RepositoryCollaboratorConnection,
	RepositoryConnection,
	RepositoryInfo,
	RepositoryInteractionLimit,
	RepositoryInteractionLimitOrigin,
	RepositoryInvitationConnection,
	RepositoryNode,
	RepositoryOwner,
	RepositoryPermission,
	RepositoryTopicConnection,
	RepositoryVulnerabilityAlertConnection,
	RequestedReviewer,
	RequirableByPullRequest,
	ReviewDismissalAllowanceActor,
	ReviewDismissalAllowanceConnection,
	ReviewRequestConnection,
	SAMLDigestAlgorithm,
	SAMLSignatureAlgorithm,
	SavedReplyConnection,
	SecurityAdvisoryEcosystem,
	SecurityAdvisorySeverity,
	SecurityVulnerabilityConnection,
	Sponsor,
	Sponsorable,
	SponsorsGoalKind,
	SponsorshipConnection,
	SponsorshipPrivacy,
	SponsorsTierConnection,
	Starrable,
	StarredRepositoryConnection,
	StatusCheckRollupContextConnection,
	StatusState,
	SubmoduleConnection,
	Subscribable,
	TeamConnection,
	TeamDiscussionCommentConnection,
	TeamDiscussionConnection,
	TeamMemberConnection,
	TeamPrivacy,
	TeamRepositoryConnection,
	UniformResourceLocatable,
	Updatable,
	UpdatableComment,
	UserConnection,
	VerifiableDomainConnection,
	VerifiableDomainOwner
} from '../';

/**
 * Location information for an actor.
 */
export interface ActorLocation extends MetaField<'ActorLocation'> {
	/**
	 * City.
	 */
	city?: Nullable<string>;

	/**
	 * Country name.
	 */
	country?: Nullable<string>;

	/**
	 * Country code.
	 */
	countryCode?: Nullable<string>;

	/**
	 * Region name.
	 */
	region?: Nullable<string>;

	/**
	 * Region or state code.
	 */
	regionCode?: Nullable<string>;
}

/**
 * A GitHub App.
 */
export interface App extends Node, MetaField<'App'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The description of the app.
	 */
	description?: Nullable<string>;

	/**
	 * The hex color code, without the leading '#', for the logo background.
	 */
	logoBackgroundColor: string;

	/**
	 * A URL pointing to the app's logo.
	 */
	logoUrl: string;

	/**
	 * The name of the app.
	 */
	name: string;

	/**
	 * A slug based on the name of the app for use in URLs.
	 */
	slug: string;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * The URL to the app's homepage.
	 */
	url: string;
}

/**
 * Represents an auto-merge request for a pull request.
 */
export interface AutoMergeRequest extends MetaField<'AutoMergeRequest'> {
	/**
	 * The email address of the author of this auto-merge request.
	 */
	authorEmail?: Nullable<string>;

	/**
	 * The commit message of the auto-merge request.
	 */
	commitBody?: Nullable<string>;

	/**
	 * The commit title of the auto-merge request.
	 */
	commitHeadline?: Nullable<string>;

	/**
	 * When was this auto-merge request was enabled.
	 */
	enabledAt?: Nullable<string>;

	/**
	 * The actor who created the auto-merge request.
	 */
	enabledBy?: Nullable<Actor>;

	/**
	 * The merge method of the auto-merge request.
	 */
	mergeMethod: PullRequestMergeMethod;

	/**
	 * The pull request that this auto-merge request is set against.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a Git blame.
 */
export interface Blame extends MetaField<'Blame'> {
	/**
	 * The list of ranges from a Git blame.
	 */
	ranges: BlameRange[];
}

/**
 * Represents a range of information from a Git blame.
 */
export interface BlameRange extends MetaField<'BlameRange'> {
	/**
	 * Identifies the recency of the change, from 1 (new) to 10 (old). This is
	 * calculated as a 2-quantile and determines the length of distance between the
	 * median age of all the changes in the file and the recency of the current
	 * range's change.
	 */
	age: number;

	/**
	 * Identifies the line author.
	 */
	commit: Commit;

	/**
	 * The ending line for the range.
	 */
	endingLine: number;

	/**
	 * The starting line for the range.
	 */
	startingLine: number;
}

/**
 * Represents a Git blob.
 */
export interface Blob extends GitObject, Node, MetaField<'Blob'> {
	/**
	 * Byte size of Blob object.
	 */
	byteSize: number;

	/**
	 * Indicates whether the Blob is binary or text. Returns null if unable to determine the
	 * encoding.
	 */
	isBinary?: Nullable<boolean>;

	/**
	 * Indicates whether the contents is truncated.
	 */
	isTruncated: boolean;

	/**
	 * UTF8 text data or null if the Blob is binary.
	 */
	text?: Nullable<string>;
}

/**
 * A special interface of user which takes actions on behalf of GitHub Apps.
 */
export interface Bot extends Actor, Node, UniformResourceLocatable, MetaField<'Bot'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * A branch protection rule.
 */
export interface BranchProtectionRule extends Node, MetaField<'BranchProtectionRule'> {
	/**
	 * Can this branch be deleted.
	 */
	allowsDeletions: boolean;

	/**
	 * Are force pushes allowed on this branch.
	 */
	allowsForcePushes: boolean;

	/**
	 * A list of conflicts matching branches protection rule and other branch protection rules.
	 */
	branchProtectionRuleConflicts: BranchProtectionRuleConflictConnection;

	/**
	 * The actor who created this branch protection rule.
	 */
	creator?: Nullable<Actor>;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * Will new commits pushed to matching branches dismiss pull request review approvals.
	 */
	dismissesStaleReviews: boolean;

	/**
	 * Can admins overwrite branch protection.
	 */
	isAdminEnforced: boolean;

	/**
	 * Repository refs that are protected by this rule.
	 */
	matchingRefs: RefConnection;

	/**
	 * Identifies the protection rule pattern.
	 */
	pattern: string;

	/**
	 * A list push allowances for this branch protection rule.
	 */
	pushAllowances: PushAllowanceConnection;

	/**
	 * The repository associated with this branch protection rule.
	 */
	repository?: Nullable<Repository>;

	/**
	 * Number of approving reviews required to update matching branches.
	 */
	requiredApprovingReviewCount?: Nullable<number>;

	/**
	 * List of required status check contexts that must pass for commits to be accepted to matching
	 * branches.
	 */
	requiredStatusCheckContexts?: Nullable<Nullable<string>[]>;

	/**
	 * Are approving reviews required to update matching branches.
	 */
	requiresApprovingReviews: boolean;

	/**
	 * Are reviews from code owners required to update matching branches.
	 */
	requiresCodeOwnerReviews: boolean;

	/**
	 * Are commits required to be signed.
	 */
	requiresCommitSignatures: boolean;

	/**
	 * Are merge commits prohibited from being pushed to this branch.
	 */
	requiresLinearHistory: boolean;

	/**
	 * Are status checks required to update matching branches.
	 */
	requiresStatusChecks: boolean;

	/**
	 * Are branches required to be up to date before merging.
	 */
	requiresStrictStatusChecks: boolean;

	/**
	 * Is pushing to matching branches restricted.
	 */
	restrictsPushes: boolean;

	/**
	 * Is dismissal of pull request reviews restricted.
	 */
	restrictsReviewDismissals: boolean;

	/**
	 * A list review dismissal allowances for this branch protection rule.
	 */
	reviewDismissalAllowances: ReviewDismissalAllowanceConnection;
}

/**
 * A conflict between two branch protection rules.
 */
export interface BranchProtectionRuleConflict extends MetaField<'BranchProtectionRuleConflict'> {
	/**
	 * Identifies the branch protection rule.
	 */
	branchProtectionRule?: Nullable<BranchProtectionRule>;

	/**
	 * Identifies the conflicting branch protection rule.
	 */
	conflictingBranchProtectionRule?: Nullable<BranchProtectionRule>;

	/**
	 * Identifies the branch ref that has conflicting rules.
	 */
	ref?: Nullable<Ref>;
}

/**
 * The Common Vulnerability Scoring System.
 */
export interface CVSS extends MetaField<'CVSS'> {
	/**
	 * The CVSS score associated with this advisory.
	 */
	score: number;

	/**
	 * The CVSS vector string associated with this advisory.
	 */
	vectorString?: Nullable<string>;
}

/**
 * A common weakness enumeration.
 */
export interface CWE extends Node, MetaField<'CWE'> {
	/**
	 * The id of the CWE.
	 */
	cweId: string;

	/**
	 * A detailed description of this CWE.
	 */
	description: string;

	/**
	 * The name of this CWE.
	 */
	name: string;
}

/**
 * A single check annotation.
 */
export interface CheckAnnotation extends MetaField<'CheckAnnotation'> {
	/**
	 * The annotation's severity level.
	 */
	annotationLevel?: Nullable<CheckAnnotationLevel>;

	/**
	 * The path to the file that this annotation was made on.
	 */
	blobUrl: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The position of this annotation.
	 */
	location: CheckAnnotationSpan;

	/**
	 * The annotation's message.
	 */
	message: string;

	/**
	 * The path that this annotation was made on.
	 */
	path: string;

	/**
	 * Additional information about the annotation.
	 */
	rawDetails?: Nullable<string>;

	/**
	 * The annotation's title.
	 */
	title?: Nullable<string>;
}

/**
 * A character position in a check annotation.
 */
export interface CheckAnnotationPosition extends MetaField<'CheckAnnotationPosition'> {
	/**
	 * Column number (1 indexed).
	 */
	column?: Nullable<number>;

	/**
	 * Line number (1 indexed).
	 */
	line: number;
}

/**
 * An inclusive pair of positions for a check annotation.
 */
export interface CheckAnnotationSpan extends MetaField<'CheckAnnotationSpan'> {
	/**
	 * End position (inclusive).
	 */
	end: CheckAnnotationPosition;

	/**
	 * Start position (inclusive).
	 */
	start: CheckAnnotationPosition;
}

/**
 * A check run.
 */
export interface CheckRun extends Node, RequirableByPullRequest, UniformResourceLocatable, MetaField<'CheckRun'> {
	/**
	 * The check run's annotations.
	 */
	annotations?: Nullable<CheckAnnotationConnection>;

	/**
	 * The check suite that this run is a part of.
	 */
	checkSuite: CheckSuite;

	/**
	 * Identifies the date and time when the check run was completed.
	 */
	completedAt?: Nullable<string>;

	/**
	 * The conclusion of the check run.
	 */
	conclusion?: Nullable<CheckConclusionState>;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The URL from which to find full details of the check run on the integrator's site.
	 */
	detailsUrl?: Nullable<string>;

	/**
	 * A reference for the check run on the integrator's system.
	 */
	externalId?: Nullable<string>;

	/**
	 * The name of the check for this check run.
	 */
	name: string;

	/**
	 * The permalink to the check run summary.
	 */
	permalink: string;

	/**
	 * The repository associated with this check run.
	 */
	repository: Repository;

	/**
	 * Identifies the date and time when the check run was started.
	 */
	startedAt?: Nullable<string>;

	/**
	 * The current status of the check run.
	 */
	status: CheckStatusState;

	/**
	 * A string representing the check run's summary.
	 */
	summary?: Nullable<string>;

	/**
	 * A string representing the check run's text.
	 */
	text?: Nullable<string>;

	/**
	 * A string representing the check run.
	 */
	title?: Nullable<string>;
}

/**
 * A check suite.
 */
export interface CheckSuite extends UniformResourceLocatable, Node, MetaField<'CheckSuite'> {
	/**
	 * The GitHub App which created this check suite.
	 */
	app?: Nullable<App>;

	/**
	 * The name of the branch for this check suite.
	 */
	branch?: Nullable<Ref>;

	/**
	 * The check runs associated with a check suite.
	 */
	checkRuns?: Nullable<CheckRunConnection>;

	/**
	 * The commit for this check suite.
	 */
	commit: Commit;

	/**
	 * The conclusion of this check suite.
	 */
	conclusion?: Nullable<CheckConclusionState>;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * A list of open pull requests matching the check suite.
	 */
	matchingPullRequests?: Nullable<PullRequestConnection>;

	/**
	 * The push that triggered this check suite.
	 */
	push?: Nullable<Push>;

	/**
	 * The repository associated with this check suite.
	 */
	repository: Repository;

	/**
	 * The status of this check suite.
	 */
	status: CheckStatusState;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * The Code of Conduct for a repository.
 */
export interface CodeOfConduct extends Node, MetaField<'CodeOfConduct'> {
	/**
	 * The body of the Code of Conduct.
	 */
	body?: Nullable<string>;

	/**
	 * The key for the Code of Conduct.
	 */
	key: string;

	/**
	 * The formal name of the Code of Conduct.
	 */
	name: string;

	/**
	 * The HTTP path for this Code of Conduct.
	 */
	resourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for this Code of Conduct.
	 */
	url?: Nullable<string>;
}

/**
 * Represents a Git commit.
 */
export interface Commit extends GitObject, Node, Subscribable, UniformResourceLocatable, MetaField<'Commit'> {
	/**
	 * The number of additions in this commit.
	 */
	additions: number;

	/**
	 * The merged Pull Request that introduced the commit to the repository. If the commit is not
	 * present in the default branch, additionally returns open Pull Requests associated with the
	 * commit.
	 */
	associatedPullRequests?: Nullable<PullRequestConnection>;

	/**
	 * Authorship details of the commit.
	 */
	author?: Nullable<GitActor>;

	/**
	 * Check if the committer and the author match.
	 */
	authoredByCommitter: boolean;

	/**
	 * The datetime when this commit was authored.
	 */
	authoredDate: string;

	/**
	 * The list of authors for this commit based on the git author and the Co-authored-by
	 * message trailer. The git author will always be first.
	 */
	authors: GitActorConnection;

	/**
	 * Fetches `git blame` information.
	 */
	blame: Blame;

	/**
	 * The number of changed files in this commit.
	 */
	changedFiles: number;

	/**
	 * The check suites associated with a commit.
	 */
	checkSuites?: Nullable<CheckSuiteConnection>;

	/**
	 * Comments made on the commit.
	 */
	comments: CommitCommentConnection;

	/**
	 * The datetime when this commit was committed.
	 */
	committedDate: string;

	/**
	 * Check if committed via GitHub web UI.
	 */
	committedViaWeb: boolean;

	/**
	 * Committer details of the commit.
	 */
	committer?: Nullable<GitActor>;

	/**
	 * The number of deletions in this commit.
	 */
	deletions: number;

	/**
	 * The deployments associated with a commit.
	 */
	deployments?: Nullable<DeploymentConnection>;

	/**
	 * The tree entry representing the file located at the given path.
	 */
	file?: Nullable<TreeEntry>;

	/**
	 * The linear commit history starting from (and including) this commit, in the same order as
	 * `git log`.
	 */
	history: CommitHistoryConnection;

	/**
	 * The Git commit message.
	 */
	message: string;

	/**
	 * The Git commit message body.
	 */
	messageBody: string;

	/**
	 * The commit message body rendered to HTML.
	 */
	messageBodyHTML: string;

	/**
	 * The Git commit message headline.
	 */
	messageHeadline: string;

	/**
	 * The commit message headline rendered to HTML.
	 */
	messageHeadlineHTML: string;

	/**
	 * The organization this commit was made on behalf of.
	 */
	onBehalfOf?: Nullable<Organization>;

	/**
	 * The parents of a commit.
	 */
	parents: CommitConnection;

	/**
	 * The datetime when this commit was pushed.
	 */
	pushedDate?: Nullable<string>;

	/**
	 * Commit signing information, if present.
	 */
	signature?: Nullable<GitSignature>;

	/**
	 * Status information for this commit.
	 */
	status?: Nullable<Status>;

	/**
	 * Check and Status rollup information for this commit.
	 */
	statusCheckRollup?: Nullable<StatusCheckRollup>;

	/**
	 * Returns a list of all submodules in this repository as of this Commit parsed from the
	 * .gitmodules file.
	 */
	submodules: SubmoduleConnection;

	/**
	 * Returns a URL to download a tarball archive for a repository.
	 * Note: For private repositories, these links are temporary and expire after five minutes.
	 */
	tarballUrl: string;

	/**
	 * Commit's root Tree.
	 */
	tree: Tree;

	/**
	 * The HTTP path for the tree of this commit.
	 */
	treeResourcePath: string;

	/**
	 * The HTTP URL for the tree of this commit.
	 */
	treeUrl: string;

	/**
	 * Returns a URL to download a zipball archive for a repository.
	 * Note: For private repositories, these links are temporary and expire after five minutes.
	 */
	zipballUrl: string;
}

/**
 * Represents a comment on a given Commit.
 */
export interface CommitComment
	extends Comment,
		Deletable,
		Minimizable,
		Node,
		Reactable,
		RepositoryNode,
		Updatable,
		UpdatableComment,
		UniformResourceLocatable,
		MetaField<'CommitComment'> {
	/**
	 * Identifies the commit associated with the comment, if the commit exists.
	 */
	commit?: Nullable<Commit>;

	/**
	 * Identifies the file path associated with the comment.
	 */
	path?: Nullable<string>;

	/**
	 * Identifies the line position associated with the comment.
	 */
	position?: Nullable<number>;
}

/**
 * A thread of comments on a commit.
 */
export interface CommitCommentThread extends Node, RepositoryNode, MetaField<'CommitCommentThread'> {
	/**
	 * The comments that exist in this thread.
	 */
	comments: CommitCommentConnection;

	/**
	 * The commit the comments were made on.
	 */
	commit?: Nullable<Commit>;

	/**
	 * The file the comments were made on.
	 */
	path?: Nullable<string>;

	/**
	 * The position in the diff for the commit that the comment was made on.
	 */
	position?: Nullable<number>;
}

/**
 * This aggregates commits made by a user within one repository.
 */
export interface CommitContributionsByRepository
	extends UniformResourceLocatable,
		RepositoryNode,
		MetaField<'CommitContributionsByRepository'> {
	/**
	 * The commit contributions, each representing a day.
	 */
	contributions: CreatedCommitContributionConnection;
}

export interface ContentAttachment {
	/**
	 * The body text of the content attachment. This parameter supports markdown.
	 */
	body: string;

	/**
	 * The content reference that the content attachment is attached to.
	 */
	contentReference: ContentReference;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId: number;

	/**
	 * The title of the content attachment.
	 */
	title: string;
}

export interface ContentReference {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId: number;

	/**
	 * The reference of the content reference.
	 */
	reference: string;
}

/**
 * A calendar of contributions made on GitHub by a user.
 */
export interface ContributionCalendar extends MetaField<'ContributionCalendar'> {
	/**
	 * A list of hex color codes used in this calendar. The darker the color, the more
	 * contributions it represents.
	 */
	colors: string[];

	/**
	 * Determine if the color set was chosen because it's currently Halloween.
	 */
	isHalloween: boolean;

	/**
	 * A list of the months of contributions in this calendar.
	 */
	months: ContributionCalendarMonth[];

	/**
	 * The count of total contributions in the calendar.
	 */
	totalContributions: number;

	/**
	 * A list of the weeks of contributions in this calendar.
	 */
	weeks: ContributionCalendarWeek[];
}

/**
 * Represents a single day of contributions on GitHub by a user.
 */
export interface ContributionCalendarDay extends MetaField<'ContributionCalendarDay'> {
	/**
	 * The hex color code that represents how many contributions were made on this day compared to
	 * others in the calendar.
	 */
	color: string;

	/**
	 * How many contributions were made by the user on this day.
	 */
	contributionCount: number;

	/**
	 * Indication of contributions, relative to other days. Can be used to indicate
	 * which color to represent this day on a calendar.
	 */
	contributionLevel: ContributionLevel;

	/**
	 * The day this square represents.
	 */
	date: string;

	/**
	 * A number representing which day of the week this square represents, e.g., 1 is Monday.
	 */
	weekday: number;
}

/**
 * A month of contributions in a user's contribution graph.
 */
export interface ContributionCalendarMonth extends MetaField<'ContributionCalendarMonth'> {
	/**
	 * The date of the first day of this month.
	 */
	firstDay: string;

	/**
	 * The name of the month.
	 */
	name: string;

	/**
	 * How many weeks started in this month.
	 */
	totalWeeks: number;

	/**
	 * The year the month occurred in.
	 */
	year: number;
}

/**
 * A week of contributions in a user's contribution graph.
 */
export interface ContributionCalendarWeek extends MetaField<'ContributionCalendarWeek'> {
	/**
	 * The days of contributions in this week.
	 */
	contributionDays: ContributionCalendarDay[];

	/**
	 * The date of the earliest square in this week.
	 */
	firstDay: string;
}

/**
 * A contributions collection aggregates contributions such as opened issues and commits created
 * by a user.
 */
export interface ContributionsCollection extends MetaField<'ContributionsCollection'> {
	/**
	 * Commit contributions made by the user, grouped by repository.
	 */
	commitContributionsByRepository: CommitContributionsByRepository[];

	/**
	 * A calendar of this user's contributions on GitHub.
	 */
	contributionCalendar: ContributionCalendar;

	/**
	 * The years the user has been making contributions with the most recent year first.
	 */
	contributionYears: number[];

	/**
	 * Determine if this collection's time span ends in the current month.
	 */
	doesEndInCurrentMonth: boolean;

	/**
	 * The date of the first restricted contribution the user made in this time
	 * period. Can only be non-null when the user has enabled private contribution counts.
	 */
	earliestRestrictedContributionDate?: Nullable<string>;

	/**
	 * The ending date and time of this collection.
	 */
	endedAt: string;

	/**
	 * The first issue the user opened on GitHub. This will be null if that issue was
	 * opened outside the collection's time range and ignoreTimeRange is `false`. If
	 * the issue is not visible but the user has opted to show private contributions,
	 * a RestrictedContribution will be returned.
	 */
	firstIssueContribution?: Nullable<CreatedIssueOrRestrictedContribution>;

	/**
	 * The first pull request the user opened on GitHub. This will be null if that
	 * pull request was opened outside the collection's time range and
	 * `ignoreTimeRange` is not `true`. If the pull request is not visible but the user
	 * has opted to show private contributions, a RestrictedContribution will be returned.
	 */
	firstPullRequestContribution?: Nullable<CreatedPullRequestOrRestrictedContribution>;

	/**
	 * The first repository the user created on GitHub. This will be null if that first repository
	 * was created outside the collection's time range and `ignoreTimeRange` is `false`. If the
	 * repository is not visible, then a `RestrictedContribution` is returned.
	 */
	firstRepositoryContribution?: Nullable<CreatedRepositoryOrRestrictedContribution>;

	/**
	 * Does the user have any more activity in the timeline that occurred prior to the collection's
	 * time range?
	 */
	hasActivityInThePast: boolean;

	/**
	 * Determine if there are any contributions in this collection.
	 */
	hasAnyContributions: boolean;

	/**
	 * Determine if the user made any contributions in this time frame whose details
	 * are not visible because they were made in a private repository. Can only be
	 * true if the user enabled private contribution counts.
	 */
	hasAnyRestrictedContributions: boolean;

	/**
	 * Whether or not the collector's time span is all within the same day.
	 */
	isSingleDay: boolean;

	/**
	 * A list of issues the user opened.
	 */
	issueContributions: CreatedIssueContributionConnection;

	/**
	 * Issue contributions made by the user, grouped by repository.
	 */
	issueContributionsByRepository: IssueContributionsByRepository[];

	/**
	 * When the user signed up for GitHub. This will be null if that sign up date
	 * falls outside the collection's time range and ignoreTimeRange is false.
	 */
	joinedGitHubContribution?: Nullable<JoinedGitHubContribution>;

	/**
	 * The date of the most recent restricted contribution the user made in this time
	 * period. Can only be non-null when the user has enabled private contribution counts.
	 */
	latestRestrictedContributionDate?: Nullable<string>;

	/**
	 * When this collection's time range does not include any activity from the user, use this
	 * to get a different collection from an earlier time range that does have activity.
	 */
	mostRecentCollectionWithActivity?: Nullable<ContributionsCollection>;

	/**
	 * Returns a different contributions collection from an earlier time range than this one
	 * that does not have any contributions.
	 */
	mostRecentCollectionWithoutActivity?: Nullable<ContributionsCollection>;

	/**
	 * The issue the user opened on GitHub that received the most comments in the specified
	 * time frame.
	 */
	popularIssueContribution?: Nullable<CreatedIssueContribution>;

	/**
	 * The pull request the user opened on GitHub that received the most comments in the
	 * specified time frame.
	 */
	popularPullRequestContribution?: Nullable<CreatedPullRequestContribution>;

	/**
	 * Pull request contributions made by the user.
	 */
	pullRequestContributions: CreatedPullRequestContributionConnection;

	/**
	 * Pull request contributions made by the user, grouped by repository.
	 */
	pullRequestContributionsByRepository: PullRequestContributionsByRepository[];

	/**
	 * Pull request review contributions made by the user.
	 */
	pullRequestReviewContributions: CreatedPullRequestReviewContributionConnection;

	/**
	 * Pull request review contributions made by the user, grouped by repository.
	 */
	pullRequestReviewContributionsByRepository: PullRequestReviewContributionsByRepository[];

	/**
	 * A list of repositories owned by the user that the user created in this time range.
	 */
	repositoryContributions: CreatedRepositoryContributionConnection;

	/**
	 * A count of contributions made by the user that the viewer cannot access. Only
	 * non-zero when the user has chosen to share their private contribution counts.
	 */
	restrictedContributionsCount: number;

	/**
	 * The beginning date and time of this collection.
	 */
	startedAt: string;

	/**
	 * How many commits were made by the user in this time span.
	 */
	totalCommitContributions: number;

	/**
	 * How many issues the user opened.
	 */
	totalIssueContributions: number;

	/**
	 * How many pull requests the user opened.
	 */
	totalPullRequestContributions: number;

	/**
	 * How many pull request reviews the user left.
	 */
	totalPullRequestReviewContributions: number;

	/**
	 * How many different repositories the user committed to.
	 */
	totalRepositoriesWithContributedCommits: number;

	/**
	 * How many different repositories the user opened issues in.
	 */
	totalRepositoriesWithContributedIssues: number;

	/**
	 * How many different repositories the user left pull request reviews in.
	 */
	totalRepositoriesWithContributedPullRequestReviews: number;

	/**
	 * How many different repositories the user opened pull requests in.
	 */
	totalRepositoriesWithContributedPullRequests: number;

	/**
	 * How many repositories the user created.
	 */
	totalRepositoryContributions: number;

	/**
	 * The user who made the contributions in this collection.
	 */
	user: User;
}

/**
 * Represents the contribution a user made by committing to a repository.
 */
export interface CreatedCommitContribution
	extends UniformResourceLocatable,
		Contribution,
		MetaField<'CreatedCommitContribution'> {
	/**
	 * How many commits were made on this day to this repository by the user.
	 */
	commitCount: number;

	/**
	 * The repository the user made a commit in.
	 */
	repository: Repository;
}

/**
 * Represents the contribution a user made on GitHub by opening an issue.
 */
export interface CreatedIssueContribution
	extends UniformResourceLocatable,
		Contribution,
		MetaField<'CreatedIssueContribution'> {
	/**
	 * The issue that was opened.
	 */
	issue: Issue;
}

/**
 * Represents the contribution a user made on GitHub by opening a pull request.
 */
export interface CreatedPullRequestContribution
	extends UniformResourceLocatable,
		Contribution,
		MetaField<'CreatedPullRequestContribution'> {
	/**
	 * The pull request that was opened.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents the contribution a user made by leaving a review on a pull request.
 */
export interface CreatedPullRequestReviewContribution
	extends UniformResourceLocatable,
		Contribution,
		MetaField<'CreatedPullRequestReviewContribution'> {
	/**
	 * The pull request the user reviewed.
	 */
	pullRequest: PullRequest;

	/**
	 * The review the user left on the pull request.
	 */
	pullRequestReview: PullRequestReview;

	/**
	 * The repository containing the pull request that the user reviewed.
	 */
	repository: Repository;
}

/**
 * Represents the contribution a user made on GitHub by creating a repository.
 */
export interface CreatedRepositoryContribution
	extends UniformResourceLocatable,
		Contribution,
		MetaField<'CreatedRepositoryContribution'> {
	/**
	 * The repository that was created.
	 */
	repository: Repository;
}

/**
 * A repository deploy key.
 */
export interface DeployKey extends Node, MetaField<'DeployKey'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The deploy key.
	 */
	key: string;

	/**
	 * Whether or not the deploy key is read only.
	 */
	readOnly: boolean;

	/**
	 * The deploy key title.
	 */
	title: string;

	/**
	 * Whether or not the deploy key has been verified.
	 */
	verified: boolean;
}

/**
 * Represents triggered deployment instance.
 */
export interface Deployment extends Node, MetaField<'Deployment'> {
	/**
	 * Identifies the commit sha of the deployment.
	 */
	commit?: Nullable<Commit>;

	/**
	 * Identifies the oid of the deployment commit, even if the commit has been deleted.
	 */
	commitOid: string;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the actor who triggered the deployment.
	 */
	creator: Actor;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The deployment description.
	 */
	description?: Nullable<string>;

	/**
	 * The latest environment to which this deployment was made.
	 */
	environment?: Nullable<string>;

	/**
	 * The latest environment to which this deployment was made.
	 */
	latestEnvironment?: Nullable<string>;

	/**
	 * The latest status of this deployment.
	 */
	latestStatus?: Nullable<DeploymentStatus>;

	/**
	 * The original environment to which this deployment was made.
	 */
	originalEnvironment?: Nullable<string>;

	/**
	 * Extra information that a deployment system might need.
	 */
	payload?: Nullable<string>;

	/**
	 * Identifies the Ref of the deployment, if the deployment was created by ref.
	 */
	ref?: Nullable<Ref>;

	/**
	 * Identifies the repository associated with the deployment.
	 */
	repository: Repository;

	/**
	 * The current state of the deployment.
	 */
	state?: Nullable<DeploymentState>;

	/**
	 * A list of statuses associated with the deployment.
	 */
	statuses?: Nullable<DeploymentStatusConnection>;

	/**
	 * The deployment task.
	 */
	task?: Nullable<string>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * Describes the status of a given deployment attempt.
 */
export interface DeploymentStatus extends Node, MetaField<'DeploymentStatus'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the actor who triggered the deployment.
	 */
	creator: Actor;

	/**
	 * Identifies the deployment associated with status.
	 */
	deployment: Deployment;

	/**
	 * Identifies the description of the deployment.
	 */
	description?: Nullable<string>;

	/**
	 * Identifies the environment URL of the deployment.
	 */
	environmentUrl?: Nullable<string>;

	/**
	 * Identifies the log URL of the deployment.
	 */
	logUrl?: Nullable<string>;

	/**
	 * Identifies the current state of the deployment.
	 */
	state: DeploymentStatusState;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * An account to manage multiple organizations with consolidated policy and billing.
 */
export interface Enterprise extends Node, UniformResourceLocatable, MetaField<'Enterprise'> {
	/**
	 * A URL pointing to the enterprise's public avatar.
	 */
	avatarUrl: string;

	/**
	 * Enterprise billing information visible to enterprise billing managers.
	 */
	billingInfo?: Nullable<EnterpriseBillingInfo>;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The description of the enterprise.
	 */
	description?: Nullable<string>;

	/**
	 * The description of the enterprise as HTML.
	 */
	descriptionHTML: string;

	/**
	 * The location of the enterprise.
	 */
	location?: Nullable<string>;

	/**
	 * A list of users who are members of this enterprise.
	 */
	members: EnterpriseMemberConnection;

	/**
	 * The name of the enterprise.
	 */
	name: string;

	/**
	 * A list of organizations that belong to this enterprise.
	 */
	organizations: OrganizationConnection;

	/**
	 * Enterprise information only visible to enterprise owners.
	 */
	ownerInfo?: Nullable<EnterpriseOwnerInfo>;

	/**
	 * The URL-friendly identifier for the enterprise.
	 */
	slug: string;

	/**
	 * A list of user accounts on this enterprise.
	 */
	userAccounts: EnterpriseUserAccountConnection;

	/**
	 * Is the current viewer an admin of this enterprise?
	 */
	viewerIsAdmin: boolean;

	/**
	 * The URL of the enterprise website.
	 */
	websiteUrl?: Nullable<string>;
}

/**
 * An invitation for a user to become an owner or billing manager of an enterprise.
 */
export interface EnterpriseAdministratorInvitation extends Node, MetaField<'EnterpriseAdministratorInvitation'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The email of the person who was invited to the enterprise.
	 */
	email?: Nullable<string>;

	/**
	 * The enterprise the invitation is for.
	 */
	enterprise: Enterprise;

	/**
	 * The user who was invited to the enterprise.
	 */
	invitee?: Nullable<User>;

	/**
	 * The user who created the invitation.
	 */
	inviter?: Nullable<User>;

	/**
	 * The invitee's pending role in the enterprise (owner or billing_manager).
	 */
	role: EnterpriseAdministratorRole;
}

/**
 * Enterprise billing information visible to enterprise billing managers and owners.
 */
export interface EnterpriseBillingInfo extends MetaField<'EnterpriseBillingInfo'> {
	/**
	 * The number of licenseable users/emails across the enterprise.
	 */
	allLicensableUsersCount: number;

	/**
	 * The number of data packs used by all organizations owned by the enterprise.
	 */
	assetPacks: number;

	/**
	 * The bandwidth quota in GB for all organizations owned by the enterprise.
	 */
	bandwidthQuota: number;

	/**
	 * The bandwidth usage in GB for all organizations owned by the enterprise.
	 */
	bandwidthUsage: number;

	/**
	 * The bandwidth usage as a percentage of the bandwidth quota.
	 */
	bandwidthUsagePercentage: number;

	/**
	 * The storage quota in GB for all organizations owned by the enterprise.
	 */
	storageQuota: number;

	/**
	 * The storage usage in GB for all organizations owned by the enterprise.
	 */
	storageUsage: number;

	/**
	 * The storage usage as a percentage of the storage quota.
	 */
	storageUsagePercentage: number;

	/**
	 * The number of available licenses across all owned organizations based on the unique number
	 * of billable users.
	 */
	totalAvailableLicenses: number;

	/**
	 * The total number of licenses allocated.
	 */
	totalLicenses: number;
}

/**
 * An identity provider configured to provision identities for an enterprise.
 */
export interface EnterpriseIdentityProvider extends Node, MetaField<'EnterpriseIdentityProvider'> {
	/**
	 * The digest algorithm used to sign SAML requests for the identity provider.
	 */
	digestMethod?: Nullable<SAMLDigestAlgorithm>;

	/**
	 * The enterprise this identity provider belongs to.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * ExternalIdentities provisioned by this identity provider.
	 */
	externalIdentities: ExternalIdentityConnection;

	/**
	 * The x509 certificate used by the identity provider to sign assertions and responses.
	 */
	idpCertificate?: Nullable<string>;

	/**
	 * The Issuer Entity ID for the SAML identity provider.
	 */
	issuer?: Nullable<string>;

	/**
	 * Recovery codes that can be used by admins to access the enterprise if the identity provider
	 * is unavailable.
	 */
	recoveryCodes?: Nullable<string[]>;

	/**
	 * The signature algorithm used to sign SAML requests for the identity provider.
	 */
	signatureMethod?: Nullable<SAMLSignatureAlgorithm>;

	/**
	 * The URL endpoint for the identity provider's SAML SSO.
	 */
	ssoUrl?: Nullable<string>;
}

/**
 * Enterprise information only visible to enterprise owners.
 */
export interface EnterpriseOwnerInfo extends MetaField<'EnterpriseOwnerInfo'> {
	/**
	 * A list of all of the administrators for this enterprise.
	 */
	admins: EnterpriseAdministratorConnection;

	/**
	 * A list of users in the enterprise who currently have two-factor authentication disabled.
	 */
	affiliatedUsersWithTwoFactorDisabled: UserConnection;

	/**
	 * Whether or not affiliated users with two-factor authentication disabled exist in the
	 * enterprise.
	 */
	affiliatedUsersWithTwoFactorDisabledExist: boolean;

	/**
	 * The setting value for whether private repository forking is enabled for repositories in
	 * organizations in this enterprise.
	 */
	allowPrivateRepositoryForkingSetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided private repository forking
	 * setting value.
	 */
	allowPrivateRepositoryForkingSettingOrganizations: OrganizationConnection;

	/**
	 * The setting value for base repository permissions for organizations in this enterprise.
	 */
	defaultRepositoryPermissionSetting: EnterpriseDefaultRepositoryPermissionSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided default repository
	 * permission.
	 */
	defaultRepositoryPermissionSettingOrganizations: OrganizationConnection;

	/**
	 * A list of domains owned by the enterprise.
	 */
	domains: VerifiableDomainConnection;

	/**
	 * Enterprise Server installations owned by the enterprise.
	 */
	enterpriseServerInstallations: EnterpriseServerInstallationConnection;

	/**
	 * The setting value for whether the enterprise has an IP allow list enabled.
	 */
	ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;

	/**
	 * The IP addresses that are allowed to access resources owned by the enterprise.
	 */
	ipAllowListEntries: IpAllowListEntryConnection;

	/**
	 * Whether or not the default repository permission is currently being updated.
	 */
	isUpdatingDefaultRepositoryPermission: boolean;

	/**
	 * Whether the two-factor authentication requirement is currently being enforced.
	 */
	isUpdatingTwoFactorRequirement: boolean;

	/**
	 * The setting value for whether organization members with admin permissions on a
	 * repository can change repository visibility.
	 */
	membersCanChangeRepositoryVisibilitySetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided can change repository
	 * visibility setting value.
	 */
	membersCanChangeRepositoryVisibilitySettingOrganizations: OrganizationConnection;

	/**
	 * The setting value for whether members of organizations in the enterprise can create internal
	 * repositories.
	 */
	membersCanCreateInternalRepositoriesSetting?: Nullable<boolean>;

	/**
	 * The setting value for whether members of organizations in the enterprise can create private
	 * repositories.
	 */
	membersCanCreatePrivateRepositoriesSetting?: Nullable<boolean>;

	/**
	 * The setting value for whether members of organizations in the enterprise can create public
	 * repositories.
	 */
	membersCanCreatePublicRepositoriesSetting?: Nullable<boolean>;

	/**
	 * The setting value for whether members of organizations in the enterprise can create
	 * repositories.
	 */
	membersCanCreateRepositoriesSetting?: Nullable<EnterpriseMembersCanCreateRepositoriesSettingValue>;

	/**
	 * A list of enterprise organizations configured with the provided repository creation setting
	 * value.
	 */
	membersCanCreateRepositoriesSettingOrganizations: OrganizationConnection;

	/**
	 * The setting value for whether members with admin permissions for repositories can delete
	 * issues.
	 */
	membersCanDeleteIssuesSetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided members can delete issues
	 * setting value.
	 */
	membersCanDeleteIssuesSettingOrganizations: OrganizationConnection;

	/**
	 * The setting value for whether members with admin permissions for repositories can delete or
	 * transfer repositories.
	 */
	membersCanDeleteRepositoriesSetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided members can delete
	 * repositories setting value.
	 */
	membersCanDeleteRepositoriesSettingOrganizations: OrganizationConnection;

	/**
	 * The setting value for whether members of organizations in the enterprise can invite outside
	 * collaborators.
	 */
	membersCanInviteCollaboratorsSetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided members can invite
	 * collaborators setting value.
	 */
	membersCanInviteCollaboratorsSettingOrganizations: OrganizationConnection;

	/**
	 * Indicates whether members of this enterprise's organizations can purchase additional
	 * services for those organizations.
	 */
	membersCanMakePurchasesSetting: EnterpriseMembersCanMakePurchasesSettingValue;

	/**
	 * The setting value for whether members with admin permissions for repositories can update
	 * protected branches.
	 */
	membersCanUpdateProtectedBranchesSetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided members can update protected
	 * branches setting value.
	 */
	membersCanUpdateProtectedBranchesSettingOrganizations: OrganizationConnection;

	/**
	 * The setting value for whether members can view dependency insights.
	 */
	membersCanViewDependencyInsightsSetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided members can view dependency
	 * insights setting value.
	 */
	membersCanViewDependencyInsightsSettingOrganizations: OrganizationConnection;

	/**
	 * Indicates if email notification delivery for this enterprise is restricted to verified
	 * domains.
	 */
	notificationDeliveryRestrictionEnabledSetting: NotificationRestrictionSettingValue;

	/**
	 * The setting value for whether organization projects are enabled for organizations in this
	 * enterprise.
	 */
	organizationProjectsSetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided organization projects setting
	 * value.
	 */
	organizationProjectsSettingOrganizations: OrganizationConnection;

	/**
	 * A list of outside collaborators across the repositories in the enterprise.
	 */
	outsideCollaborators: EnterpriseOutsideCollaboratorConnection;

	/**
	 * A list of pending administrator invitations for the enterprise.
	 */
	pendingAdminInvitations: EnterpriseAdministratorInvitationConnection;

	/**
	 * A list of pending collaborator invitations across the repositories in the enterprise.
	 */
	pendingCollaboratorInvitations: RepositoryInvitationConnection;

	/**
	 * A list of pending member invitations for organizations in the enterprise.
	 */
	pendingMemberInvitations: EnterprisePendingMemberInvitationConnection;

	/**
	 * The setting value for whether repository projects are enabled in this enterprise.
	 */
	repositoryProjectsSetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided repository projects setting
	 * value.
	 */
	repositoryProjectsSettingOrganizations: OrganizationConnection;

	/**
	 * The SAML Identity Provider for the enterprise.
	 */
	samlIdentityProvider?: Nullable<EnterpriseIdentityProvider>;

	/**
	 * A list of enterprise organizations configured with the SAML single sign-on setting value.
	 */
	samlIdentityProviderSettingOrganizations: OrganizationConnection;

	/**
	 * A list of members with a support entitlement.
	 */
	supportEntitlements: EnterpriseMemberConnection;

	/**
	 * The setting value for whether team discussions are enabled for organizations in this
	 * enterprise.
	 */
	teamDiscussionsSetting: EnterpriseEnabledDisabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the provided team discussions setting
	 * value.
	 */
	teamDiscussionsSettingOrganizations: OrganizationConnection;

	/**
	 * The setting value for whether the enterprise requires two-factor authentication for its
	 * organizations and users.
	 */
	twoFactorRequiredSetting: EnterpriseEnabledSettingValue;

	/**
	 * A list of enterprise organizations configured with the two-factor authentication setting
	 * value.
	 */
	twoFactorRequiredSettingOrganizations: OrganizationConnection;
}

/**
 * A subset of repository information queryable from an enterprise.
 */
export interface EnterpriseRepositoryInfo extends Node, MetaField<'EnterpriseRepositoryInfo'> {
	/**
	 * Identifies if the repository is private or internal.
	 */
	isPrivate: boolean;

	/**
	 * The repository's name.
	 */
	name: string;

	/**
	 * The repository's name with owner.
	 */
	nameWithOwner: string;
}

/**
 * An Enterprise Server installation.
 */
export interface EnterpriseServerInstallation extends Node, MetaField<'EnterpriseServerInstallation'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The customer name to which the Enterprise Server installation belongs.
	 */
	customerName: string;

	/**
	 * The host name of the Enterprise Server installation.
	 */
	hostName: string;

	/**
	 * Whether or not the installation is connected to an Enterprise Server installation via GitHub
	 * Connect.
	 */
	isConnected: boolean;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * User accounts on this Enterprise Server installation.
	 */
	userAccounts: EnterpriseServerUserAccountConnection;

	/**
	 * User accounts uploads for the Enterprise Server installation.
	 */
	userAccountsUploads: EnterpriseServerUserAccountsUploadConnection;
}

/**
 * A user account on an Enterprise Server installation.
 */
export interface EnterpriseServerUserAccount extends Node, MetaField<'EnterpriseServerUserAccount'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * User emails belonging to this user account.
	 */
	emails: EnterpriseServerUserAccountEmailConnection;

	/**
	 * The Enterprise Server installation on which this user account exists.
	 */
	enterpriseServerInstallation: EnterpriseServerInstallation;

	/**
	 * Whether the user account is a site administrator on the Enterprise Server installation.
	 */
	isSiteAdmin: boolean;

	/**
	 * The login of the user account on the Enterprise Server installation.
	 */
	login: string;

	/**
	 * The profile name of the user account on the Enterprise Server installation.
	 */
	profileName?: Nullable<string>;

	/**
	 * The date and time when the user account was created on the Enterprise Server installation.
	 */
	remoteCreatedAt: string;

	/**
	 * The ID of the user account on the Enterprise Server installation.
	 */
	remoteUserId: number;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * An email belonging to a user account on an Enterprise Server installation.
 */
export interface EnterpriseServerUserAccountEmail extends Node, MetaField<'EnterpriseServerUserAccountEmail'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The email address.
	 */
	email: string;

	/**
	 * Indicates whether this is the primary email of the associated user account.
	 */
	isPrimary: boolean;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * The user account to which the email belongs.
	 */
	userAccount: EnterpriseServerUserAccount;
}

/**
 * A user accounts upload from an Enterprise Server installation.
 */
export interface EnterpriseServerUserAccountsUpload extends Node, MetaField<'EnterpriseServerUserAccountsUpload'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The enterprise to which this upload belongs.
	 */
	enterprise: Enterprise;

	/**
	 * The Enterprise Server installation for which this upload was generated.
	 */
	enterpriseServerInstallation: EnterpriseServerInstallation;

	/**
	 * The name of the file uploaded.
	 */
	name: string;

	/**
	 * The synchronization state of the upload.
	 */
	syncState: EnterpriseServerUserAccountsUploadSyncState;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * An account for a user who is an admin of an enterprise or a member of an enterprise through one
 * or more organizations.
 */
export interface EnterpriseUserAccount extends Actor, Node, MetaField<'EnterpriseUserAccount'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The enterprise in which this user account exists.
	 */
	enterprise: Enterprise;

	/**
	 * The name of the enterprise user account.
	 */
	name?: Nullable<string>;

	/**
	 * A list of enterprise organizations this user is a member of.
	 */
	organizations: EnterpriseOrganizationMembershipConnection;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * The user within the enterprise.
	 */
	user?: Nullable<User>;
}

/**
 * An external identity provisioned by SAML SSO or SCIM.
 */
export interface ExternalIdentity extends Node, MetaField<'ExternalIdentity'> {
	/**
	 * The GUID for this identity.
	 */
	guid: string;

	/**
	 * Organization invitation for this SCIM-provisioned external identity.
	 */
	organizationInvitation?: Nullable<OrganizationInvitation>;

	/**
	 * SAML Identity attributes.
	 */
	samlIdentity?: Nullable<ExternalIdentitySamlAttributes>;

	/**
	 * SCIM Identity attributes.
	 */
	scimIdentity?: Nullable<ExternalIdentityScimAttributes>;

	/**
	 * User linked to this external identity. Will be NULL if this identity has not been claimed by
	 * an organization member.
	 */
	user?: Nullable<User>;
}

/**
 * SAML attributes for the External Identity.
 */
export interface ExternalIdentitySamlAttributes extends MetaField<'ExternalIdentitySamlAttributes'> {
	/**
	 * The emails associated with the SAML identity.
	 */
	emails?: Nullable<UserEmailMetadata[]>;

	/**
	 * Family name of the SAML identity.
	 */
	familyName?: Nullable<string>;

	/**
	 * Given name of the SAML identity.
	 */
	givenName?: Nullable<string>;

	/**
	 * The groups linked to this identity in IDP.
	 */
	groups?: Nullable<string[]>;

	/**
	 * The NameID of the SAML identity.
	 */
	nameId?: Nullable<string>;

	/**
	 * The userName of the SAML identity.
	 */
	username?: Nullable<string>;
}

/**
 * SCIM attributes for the External Identity.
 */
export interface ExternalIdentityScimAttributes extends MetaField<'ExternalIdentityScimAttributes'> {
	/**
	 * The emails associated with the SCIM identity.
	 */
	emails?: Nullable<UserEmailMetadata[]>;

	/**
	 * Family name of the SCIM identity.
	 */
	familyName?: Nullable<string>;

	/**
	 * Given name of the SCIM identity.
	 */
	givenName?: Nullable<string>;

	/**
	 * The groups linked to this identity in IDP.
	 */
	groups?: Nullable<string[]>;

	/**
	 * The userName of the SCIM identity.
	 */
	username?: Nullable<string>;
}

/**
 * A funding platform link for a repository.
 */
export interface FundingLink extends MetaField<'FundingLink'> {
	/**
	 * The funding platform this link is for.
	 */
	platform: FundingPlatform;

	/**
	 * The configured URL for this funding link.
	 */
	url: string;
}

/**
 * A generic hovercard context with a message and icon.
 */
export type GenericHovercardContext = HovercardContext & MetaField<'GenericHovercardContext'>;

/**
 * A Gist.
 */
export interface Gist extends Node, Starrable, UniformResourceLocatable, MetaField<'Gist'> {
	/**
	 * A list of comments associated with the gist.
	 */
	comments: GistCommentConnection;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The gist description.
	 */
	description?: Nullable<string>;

	/**
	 * The files in this gist.
	 */
	files?: Nullable<Nullable<GistFile>[]>;

	/**
	 * A list of forks associated with the gist.
	 */
	forks: GistConnection;

	/**
	 * Identifies if the gist is a fork.
	 */
	isFork: boolean;

	/**
	 * Whether the gist is public or not.
	 */
	isPublic: boolean;

	/**
	 * The gist name.
	 */
	name: string;

	/**
	 * The gist owner.
	 */
	owner?: Nullable<RepositoryOwner>;

	/**
	 * Identifies when the gist was last pushed to.
	 */
	pushedAt?: Nullable<string>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * Represents a comment on an Gist.
 */
export interface GistComment
	extends Comment,
		Deletable,
		Minimizable,
		Node,
		Updatable,
		UpdatableComment,
		MetaField<'GistComment'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The associated gist.
	 */
	gist: Gist;
}

/**
 * A file in a gist.
 */
export interface GistFile extends MetaField<'GistFile'> {
	/**
	 * The file name encoded to remove characters that are invalid in URL paths.
	 */
	encodedName?: Nullable<string>;

	/**
	 * The gist file encoding.
	 */
	encoding?: Nullable<string>;

	/**
	 * The file extension from the file name.
	 */
	extension?: Nullable<string>;

	/**
	 * Indicates if this file is an image.
	 */
	isImage: boolean;

	/**
	 * Whether the file's contents were truncated.
	 */
	isTruncated: boolean;

	/**
	 * The programming language this file is written in.
	 */
	language?: Nullable<Language>;

	/**
	 * The gist file name.
	 */
	name?: Nullable<string>;

	/**
	 * The gist file size in bytes.
	 */
	size?: Nullable<number>;

	/**
	 * UTF8 text data or null if the file is binary.
	 */
	text?: Nullable<string>;
}

/**
 * Represents an actor in a Git commit (ie. an author or committer)
 */
export interface GitActor extends MetaField<'GitActor'> {
	/**
	 * A URL pointing to the author's public avatar.
	 */
	avatarUrl: string;

	/**
	 * The timestamp of the Git action (authoring or committing).
	 */
	date?: Nullable<string>;

	/**
	 * The email in the Git commit.
	 */
	email?: Nullable<string>;

	/**
	 * The name in the Git commit.
	 */
	name?: Nullable<string>;

	/**
	 * The GitHub user corresponding to the email field. Null if no such user exists.
	 */
	user?: Nullable<User>;
}

/**
 * Represents information about the GitHub instance.
 */
export interface GitHubMetadata extends MetaField<'GitHubMetadata'> {
	/**
	 * Returns a String that's a SHA of `github-services`
	 */
	gitHubServicesSha: string;

	/**
	 * IP addresses that users connect to for git operations.
	 */
	gitIpAddresses?: Nullable<string[]>;

	/**
	 * IP addresses that service hooks are sent from.
	 */
	hookIpAddresses?: Nullable<string[]>;

	/**
	 * IP addresses that the importer connects from.
	 */
	importerIpAddresses?: Nullable<string[]>;

	/**
	 * Whether or not users are verified.
	 */
	isPasswordAuthenticationVerifiable: boolean;

	/**
	 * IP addresses for GitHub Pages' A records.
	 */
	pagesIpAddresses?: Nullable<string[]>;
}

/**
 * Represents a GPG signature on a Commit or Tag.
 */
export interface GpgSignature extends GitSignature, MetaField<'GpgSignature'> {
	/**
	 * Hex-encoded ID of the key that signed this object.
	 */
	keyId?: Nullable<string>;
}

/**
 * Detail needed to display a hovercard for a user.
 */
export interface Hovercard extends MetaField<'Hovercard'> {
	/**
	 * Each of the contexts for this hovercard.
	 */
	contexts: HovercardContext[];
}

/**
 * An IP address or range of addresses that is allowed to access an owner's resources.
 */
export interface IpAllowListEntry extends Node, MetaField<'IpAllowListEntry'> {
	/**
	 * A single IP address or range of IP addresses in CIDR notation.
	 */
	allowListValue: string;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Whether the entry is currently active.
	 */
	isActive: boolean;

	/**
	 * The name of the IP allow list entry.
	 */
	name?: Nullable<string>;

	/**
	 * The owner of the IP allow list entry.
	 */
	owner: IpAllowListOwner;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project.
 */
export interface Issue
	extends Assignable,
		Closable,
		Comment,
		Labelable,
		Lockable,
		Node,
		Reactable,
		RepositoryNode,
		Subscribable,
		UniformResourceLocatable,
		Updatable,
		UpdatableComment,
		MetaField<'Issue'> {
	/**
	 * The http path for this issue body.
	 */
	bodyResourcePath: string;

	/**
	 * The http URL for this issue body.
	 */
	bodyUrl: string;

	/**
	 * A list of comments associated with the Issue.
	 */
	comments: IssueCommentConnection;

	/**
	 * The hovercard information for this issue.
	 */
	hovercard: Hovercard;

	/**
	 * Indicates whether or not this issue is currently pinned to the repository issues list.
	 */
	isPinned?: Nullable<boolean>;

	/**
	 * Is this issue read by the viewer.
	 */
	isReadByViewer?: Nullable<boolean>;

	/**
	 * Identifies the milestone associated with the issue.
	 */
	milestone?: Nullable<Milestone>;

	/**
	 * Identifies the issue number.
	 */
	number: number;

	/**
	 * A list of Users that are participating in the Issue conversation.
	 */
	participants: UserConnection;

	/**
	 * List of project cards associated with this issue.
	 */
	projectCards: ProjectCardConnection;

	/**
	 * Identifies the state of the issue.
	 */
	state: IssueState;

	/**
	 * A list of events, comments, commits, etc. associated with the issue.
	 */
	timelineItems: IssueTimelineItemsConnection;

	/**
	 * Identifies the issue title.
	 */
	title: string;
}

/**
 * Represents a comment on an Issue.
 */
export interface IssueComment
	extends Comment,
		Deletable,
		Minimizable,
		Node,
		Reactable,
		RepositoryNode,
		Node,
		Updatable,
		UpdatableComment,
		UniformResourceLocatable,
		MetaField<'IssueComment'> {
	/**
	 * The actor who edited the comment.
	 */
	editor?: Nullable<Actor>;

	/**
	 * Check if this comment was edited and includes an edit with the creation data.
	 */
	includesCreatedEdit: boolean;

	/**
	 * Identifies the issue associated with the comment.
	 */
	issue: Issue;

	/**
	 * Returns the pull request associated with the comment, if this comment was made on a
	 * pull request.
	 */
	pullRequest?: Nullable<PullRequest>;
}

/**
 * This aggregates issues opened by a user within one repository.
 */
export interface IssueContributionsByRepository extends MetaField<'IssueContributionsByRepository'> {
	/**
	 * The issue contributions.
	 */
	contributions: CreatedIssueContributionConnection;

	/**
	 * The repository in which the issues were opened.
	 */
	repository: Repository;
}

/**
 * A repository issue template.
 */
export interface IssueTemplate extends MetaField<'IssueTemplate'> {
	/**
	 * The template purpose.
	 */
	about?: Nullable<string>;

	/**
	 * The suggested issue body.
	 */
	body?: Nullable<string>;

	/**
	 * The template name.
	 */
	name: string;

	/**
	 * The suggested issue title.
	 */
	title?: Nullable<string>;
}

/**
 * Represents a user signing up for a GitHub account.
 */
export type JoinedGitHubContribution = UniformResourceLocatable & Contribution & MetaField<'JoinedGitHubContribution'>;

/**
 * A label for categorizing Issues or Milestones with a given Repository.
 */
export interface Label extends UniformResourceLocatable, Node, MetaField<'Label'> {
	/**
	 * Identifies the label color.
	 */
	color: string;

	/**
	 * Identifies the date and time when the label was created.
	 */
	createdAt?: Nullable<string>;

	/**
	 * A brief description of this label.
	 */
	description?: Nullable<string>;

	/**
	 * Indicates whether or not this is a default label.
	 */
	isDefault: boolean;

	/**
	 * A list of issues associated with this label.
	 */
	issues: IssueConnection;

	/**
	 * Identifies the label name.
	 */
	name: string;

	/**
	 * A list of pull requests associated with this label.
	 */
	pullRequests: PullRequestConnection;

	/**
	 * The repository associated with this label.
	 */
	repository: Repository;

	/**
	 * Identifies the date and time when the label was last updated.
	 */
	updatedAt?: Nullable<string>;
}

/**
 * Represents a given language found in repositories.
 */
export interface Language extends Node, MetaField<'Language'> {
	/**
	 * The color defined for the current language.
	 */
	color?: Nullable<string>;

	/**
	 * The name of the current language.
	 */
	name: string;
}

/**
 * A repository's open source license.
 */
export interface License extends Node, MetaField<'License'> {
	/**
	 * The full text of the license.
	 */
	body: string;

	/**
	 * The conditions set by the license.
	 */
	conditions: Nullable<LicenseRule>[];

	/**
	 * A human-readable description of the license.
	 */
	description?: Nullable<string>;

	/**
	 * Whether the license should be featured.
	 */
	featured: boolean;

	/**
	 * Whether the license should be displayed in license pickers.
	 */
	hidden: boolean;

	/**
	 * Instructions on how to implement the license.
	 */
	implementation?: Nullable<string>;

	/**
	 * The lowercased SPDX ID of the license.
	 */
	key: string;

	/**
	 * The limitations set by the license.
	 */
	limitations: Nullable<LicenseRule>[];

	/**
	 * The license full name.
	 */
	name: string;

	/**
	 * Customary short name if applicable.
	 */
	nickname?: Nullable<string>;

	/**
	 * The permissions set by the license.
	 */
	permissions: Nullable<LicenseRule>[];

	/**
	 * Whether the license is a pseudo-license placeholder.
	 */
	pseudoLicense: boolean;

	/**
	 * Short identifier.
	 */
	spdxId?: Nullable<string>;

	/**
	 * URL to the license.
	 */
	url?: Nullable<string>;
}

/**
 * Describes a License's conditions, permissions, and limitations.
 */
export interface LicenseRule extends MetaField<'LicenseRule'> {
	/**
	 * A description of the rule.
	 */
	description: string;

	/**
	 * The machine-readable rule key.
	 */
	key: string;

	/**
	 * The human-readable rule label.
	 */
	label: string;
}

/**
 * A placeholder user for attribution of imported data on GitHub.
 */
export interface Mannequin extends Actor, Node, UniformResourceLocatable, MetaField<'Mannequin'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The mannequin's email on the source instance.
	 */
	email?: Nullable<string>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * A public description of a Marketplace category.
 */
export interface MarketplaceCategory extends UniformResourceLocatable, Node, MetaField<'MarketplaceCategory'> {
	/**
	 * The category's description.
	 */
	description?: Nullable<string>;

	/**
	 * The technical description of how apps listed in this category work with GitHub.
	 */
	howItWorks?: Nullable<string>;

	/**
	 * The category's name.
	 */
	name: string;

	/**
	 * How many Marketplace listings have this as their primary category.
	 */
	primaryListingCount: number;

	/**
	 * How many Marketplace listings have this as their secondary category.
	 */
	secondaryListingCount: number;

	/**
	 * The short name of the category used in its URL.
	 */
	slug: string;
}

/**
 * A listing in the GitHub integration marketplace.
 */
export interface MarketplaceListing extends UniformResourceLocatable, Node, MetaField<'MarketplaceListing'> {
	/**
	 * The GitHub App this listing represents.
	 */
	app?: Nullable<App>;

	/**
	 * URL to the listing owner's company site.
	 */
	companyUrl?: Nullable<string>;

	/**
	 * The HTTP path for configuring access to the listing's integration or OAuth app.
	 */
	configurationResourcePath: string;

	/**
	 * The HTTP URL for configuring access to the listing's integration or OAuth app.
	 */
	configurationUrl: string;

	/**
	 * URL to the listing's documentation.
	 */
	documentationUrl?: Nullable<string>;

	/**
	 * The listing's detailed description.
	 */
	extendedDescription?: Nullable<string>;

	/**
	 * The listing's detailed description rendered to HTML.
	 */
	extendedDescriptionHTML: string;

	/**
	 * The listing's introductory description.
	 */
	fullDescription: string;

	/**
	 * The listing's introductory description rendered to HTML.
	 */
	fullDescriptionHTML: string;

	/**
	 * Does this listing have any plans with a free trial?
	 */
	hasPublishedFreeTrialPlans: boolean;

	/**
	 * Does this listing have a terms of service link?
	 */
	hasTermsOfService: boolean;

	/**
	 * Whether the creator of the app is a verified org.
	 */
	hasVerifiedOwner: boolean;

	/**
	 * A technical description of how this app works with GitHub.
	 */
	howItWorks?: Nullable<string>;

	/**
	 * The listing's technical description rendered to HTML.
	 */
	howItWorksHTML: string;

	/**
	 * URL to install the product to the viewer's account or organization.
	 */
	installationUrl?: Nullable<string>;

	/**
	 * Whether this listing's app has been installed for the current viewer.
	 */
	installedForViewer: boolean;

	/**
	 * Whether this listing has been removed from the Marketplace.
	 */
	isArchived: boolean;

	/**
	 * Whether this listing is still an editable draft that has not been submitted
	 * for review and is not publicly visible in the Marketplace.
	 */
	isDraft: boolean;

	/**
	 * Whether the product this listing represents is available as part of a paid plan.
	 */
	isPaid: boolean;

	/**
	 * Whether this listing has been approved for display in the Marketplace.
	 */
	isPublic: boolean;

	/**
	 * Whether this listing has been rejected by GitHub for display in the Marketplace.
	 */
	isRejected: boolean;

	/**
	 * Whether this listing has been approved for unverified display in the Marketplace.
	 */
	isUnverified: boolean;

	/**
	 * Whether this draft listing has been submitted for review for approval to be unverified in
	 * the Marketplace.
	 */
	isUnverifiedPending: boolean;

	/**
	 * Whether this draft listing has been submitted for review from GitHub for approval to be
	 * verified in the Marketplace.
	 */
	isVerificationPendingFromDraft: boolean;

	/**
	 * Whether this unverified listing has been submitted for review from GitHub for approval to be
	 * verified in the Marketplace.
	 */
	isVerificationPendingFromUnverified: boolean;

	/**
	 * Whether this listing has been approved for verified display in the Marketplace.
	 */
	isVerified: boolean;

	/**
	 * The hex color code, without the leading '#', for the logo background.
	 */
	logoBackgroundColor: string;

	/**
	 * URL for the listing's logo image.
	 */
	logoUrl?: Nullable<string>;

	/**
	 * The listing's full name.
	 */
	name: string;

	/**
	 * The listing's very short description without a trailing period or ampersands.
	 */
	normalizedShortDescription: string;

	/**
	 * URL to the listing's detailed pricing.
	 */
	pricingUrl?: Nullable<string>;

	/**
	 * The category that best describes the listing.
	 */
	primaryCategory: MarketplaceCategory;

	/**
	 * URL to the listing's privacy policy, may return an empty string for listings that do not
	 * require a privacy policy URL.
	 */
	privacyPolicyUrl: string;

	/**
	 * The URLs for the listing's screenshots.
	 */
	screenshotUrls: Nullable<string>[];

	/**
	 * An alternate category that describes the listing.
	 */
	secondaryCategory?: Nullable<MarketplaceCategory>;

	/**
	 * The listing's very short description.
	 */
	shortDescription: string;

	/**
	 * The short name of the listing used in its URL.
	 */
	slug: string;

	/**
	 * URL to the listing's status page.
	 */
	statusUrl?: Nullable<string>;

	/**
	 * An email address for support for this listing's app.
	 */
	supportEmail?: Nullable<string>;

	/**
	 * Either a URL or an email address for support for this listing's app, may
	 * return an empty string for listings that do not require a support URL.
	 */
	supportUrl: string;

	/**
	 * URL to the listing's terms of service.
	 */
	termsOfServiceUrl?: Nullable<string>;

	/**
	 * Can the current viewer add plans for this Marketplace listing.
	 */
	viewerCanAddPlans: boolean;

	/**
	 * Can the current viewer approve this Marketplace listing.
	 */
	viewerCanApprove: boolean;

	/**
	 * Can the current viewer delist this Marketplace listing.
	 */
	viewerCanDelist: boolean;

	/**
	 * Can the current viewer edit this Marketplace listing.
	 */
	viewerCanEdit: boolean;

	/**
	 * Can the current viewer edit the primary and secondary category of this
	 * Marketplace listing.
	 */
	viewerCanEditCategories: boolean;

	/**
	 * Can the current viewer edit the plans for this Marketplace listing.
	 */
	viewerCanEditPlans: boolean;

	/**
	 * Can the current viewer return this Marketplace listing to draft state
	 * so it becomes editable again.
	 */
	viewerCanRedraft: boolean;

	/**
	 * Can the current viewer reject this Marketplace listing by returning it to
	 * an editable draft state or rejecting it entirely.
	 */
	viewerCanReject: boolean;

	/**
	 * Can the current viewer request this listing be reviewed for display in
	 * the Marketplace as verified.
	 */
	viewerCanRequestApproval: boolean;

	/**
	 * Indicates whether the current user has an active subscription to this Marketplace listing.
	 */
	viewerHasPurchased: boolean;

	/**
	 * Indicates if the current user has purchased a subscription to this Marketplace listing
	 * for all of the organizations the user owns.
	 */
	viewerHasPurchasedForAllOrganizations: boolean;

	/**
	 * Does the current viewer role allow them to administer this Marketplace listing.
	 */
	viewerIsListingAdmin: boolean;
}

/**
 * Represents a Milestone object on a given repository.
 */
export interface Milestone extends Closable, Node, UniformResourceLocatable, MetaField<'Milestone'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the actor who created the milestone.
	 */
	creator?: Nullable<Actor>;

	/**
	 * Identifies the description of the milestone.
	 */
	description?: Nullable<string>;

	/**
	 * Identifies the due date of the milestone.
	 */
	dueOn?: Nullable<string>;

	/**
	 * A list of issues associated with the milestone.
	 */
	issues: IssueConnection;

	/**
	 * Identifies the number of the milestone.
	 */
	number: number;

	/**
	 * Identifies the percentage complete for the milestone.
	 */
	progressPercentage: number;

	/**
	 * A list of pull requests associated with the milestone.
	 */
	pullRequests: PullRequestConnection;

	/**
	 * The repository associated with this milestone.
	 */
	repository: Repository;

	/**
	 * Identifies the state of the milestone.
	 */
	state: MilestoneState;

	/**
	 * Identifies the title of the milestone.
	 */
	title: string;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * An account on GitHub, with one or more owners, that has repositories, members and teams.
 */
export interface Organization
	extends Actor,
		MemberStatusable,
		Node,
		PackageOwner,
		ProfileOwner,
		ProjectOwner,
		RepositoryOwner,
		Sponsorable,
		UniformResourceLocatable,
		MetaField<'Organization'> {
	/**
	 * Audit log entries of the organization.
	 */
	auditLog: OrganizationAuditEntryConnection;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The organization's public profile description.
	 */
	description?: Nullable<string>;

	/**
	 * The organization's public profile description rendered to HTML.
	 */
	descriptionHTML?: Nullable<string>;

	/**
	 * A list of domains owned by the organization.
	 */
	domains?: Nullable<VerifiableDomainConnection>;

	/**
	 * The interaction ability settings for this organization.
	 */
	interactionAbility?: Nullable<RepositoryInteractionAbility>;

	/**
	 * The setting value for whether the organization has an IP allow list enabled.
	 */
	ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;

	/**
	 * The IP addresses that are allowed to access resources owned by the organization.
	 */
	ipAllowListEntries: IpAllowListEntryConnection;

	/**
	 * Whether the organization has verified its profile email and website.
	 */
	isVerified: boolean;

	/**
	 * A list of users who are members of this organization.
	 */
	membersWithRole: OrganizationMemberConnection;

	/**
	 * The HTTP path creating a new team.
	 */
	newTeamResourcePath: string;

	/**
	 * The HTTP URL creating a new team.
	 */
	newTeamUrl: string;

	/**
	 * Indicates if email notification delivery for this organization is restricted to verified
	 * domains.
	 */
	notificationDeliveryRestrictionEnabledSetting: NotificationRestrictionSettingValue;

	/**
	 * The billing email for the organization.
	 */
	organizationBillingEmail?: Nullable<string>;

	/**
	 * A list of users who have been invited to join this organization.
	 */
	pendingMembers: UserConnection;

	/**
	 * When true the organization requires all members, billing managers, and outside
	 * collaborators to enable two-factor authentication.
	 */
	requiresTwoFactorAuthentication?: Nullable<boolean>;

	/**
	 * The Organization's SAML identity providers.
	 */
	samlIdentityProvider?: Nullable<OrganizationIdentityProvider>;

	/**
	 * Find an organization's team by its slug.
	 */
	team?: Nullable<Team>;

	/**
	 * A list of teams in this organization.
	 */
	teams: TeamConnection;

	/**
	 * The HTTP path listing organization's teams.
	 */
	teamsResourcePath: string;

	/**
	 * The HTTP URL listing organization's teams.
	 */
	teamsUrl: string;

	/**
	 * The organization's Twitter username.
	 */
	twitterUsername?: Nullable<string>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * Organization is adminable by the viewer.
	 */
	viewerCanAdminister: boolean;

	/**
	 * Viewer can create repositories on this organization.
	 */
	viewerCanCreateRepositories: boolean;

	/**
	 * Viewer can create teams on this organization.
	 */
	viewerCanCreateTeams: boolean;

	/**
	 * Viewer is an active member of this organization.
	 */
	viewerIsAMember: boolean;
}

/**
 * An Identity Provider configured to provision SAML and SCIM identities for Organizations.
 */
export interface OrganizationIdentityProvider extends Node, MetaField<'OrganizationIdentityProvider'> {
	/**
	 * The digest algorithm used to sign SAML requests for the Identity Provider.
	 */
	digestMethod?: Nullable<string>;

	/**
	 * External Identities provisioned by this Identity Provider.
	 */
	externalIdentities: ExternalIdentityConnection;

	/**
	 * The x509 certificate used by the Identity Provider to sign assertions and responses.
	 */
	idpCertificate?: Nullable<string>;

	/**
	 * The Issuer Entity ID for the SAML Identity Provider.
	 */
	issuer?: Nullable<string>;

	/**
	 * Organization this Identity Provider belongs to.
	 */
	organization?: Nullable<Organization>;

	/**
	 * The signature algorithm used to sign SAML requests for the Identity Provider.
	 */
	signatureMethod?: Nullable<string>;

	/**
	 * The URL endpoint for the Identity Provider's SAML SSO.
	 */
	ssoUrl?: Nullable<string>;
}

/**
 * An Invitation for a user to an organization.
 */
export interface OrganizationInvitation extends Node, MetaField<'OrganizationInvitation'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The email address of the user invited to the organization.
	 */
	email?: Nullable<string>;

	/**
	 * The type of invitation that was sent.
	 */
	invitationType: OrganizationInvitationType;

	/**
	 * The user who was invited to the organization.
	 */
	invitee?: Nullable<User>;

	/**
	 * The user who created the invitation.
	 */
	inviter: User;

	/**
	 * The organization the invite is for.
	 */
	organization: Organization;

	/**
	 * The user's pending role in the organization.
	 */
	role: OrganizationInvitationRole;
}

/**
 * An organization teams hovercard context.
 */
export interface OrganizationTeamsHovercardContext
	extends HovercardContext,
		MetaField<'OrganizationTeamsHovercardContext'> {
	/**
	 * Teams in this organization the user is a member of that are relevant.
	 */
	relevantTeams: TeamConnection;

	/**
	 * The path for the full team list for this user.
	 */
	teamsResourcePath: string;

	/**
	 * The URL for the full team list for this user.
	 */
	teamsUrl: string;

	/**
	 * The total number of teams the user is on in the organization.
	 */
	totalTeamCount: number;
}

/**
 * An organization list hovercard context.
 */
export interface OrganizationsHovercardContext extends HovercardContext, MetaField<'OrganizationsHovercardContext'> {
	/**
	 * Organizations this user is a member of that are relevant.
	 */
	relevantOrganizations: OrganizationConnection;

	/**
	 * The total number of organizations this user is in.
	 */
	totalOrganizationCount: number;
}

/**
 * Information for an uploaded package.
 */
export interface Package extends Node, MetaField<'Package'> {
	/**
	 * Find the latest version for the package.
	 */
	latestVersion?: Nullable<PackageVersion>;

	/**
	 * Identifies the name of the package.
	 */
	name: string;

	/**
	 * Identifies the type of the package.
	 */
	packageType: PackageType;

	/**
	 * The repository this package belongs to.
	 */
	repository?: Nullable<Repository>;

	/**
	 * Statistics about package activity.
	 */
	statistics?: Nullable<PackageStatistics>;

	/**
	 * Find package version by version string.
	 */
	version?: Nullable<PackageVersion>;

	/**
	 * list of versions for this package.
	 */
	versions: PackageVersionConnection;
}

/**
 * A file in a package version.
 */
export interface PackageFile extends Node, MetaField<'PackageFile'> {
	/**
	 * MD5 hash of the file.
	 */
	md5?: Nullable<string>;

	/**
	 * Name of the file.
	 */
	name: string;

	/**
	 * The package version this file belongs to.
	 */
	packageVersion?: Nullable<PackageVersion>;

	/**
	 * SHA1 hash of the file.
	 */
	sha1?: Nullable<string>;

	/**
	 * SHA256 hash of the file.
	 */
	sha256?: Nullable<string>;

	/**
	 * Size of the file in bytes.
	 */
	size?: Nullable<number>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * URL to download the asset.
	 */
	url?: Nullable<string>;
}

/**
 * Represents a object that contains package activity statistics such as downloads.
 */
export interface PackageStatistics extends MetaField<'PackageStatistics'> {
	/**
	 * Number of times the package was downloaded since it was created.
	 */
	downloadsTotalCount: number;
}

/**
 * A version tag contains the mapping between a tag name and a version.
 */
export interface PackageTag extends Node, MetaField<'PackageTag'> {
	/**
	 * Identifies the tag name of the version.
	 */
	name: string;

	/**
	 * Version that the tag is associated with.
	 */
	version?: Nullable<PackageVersion>;
}

/**
 * Information about a specific package version.
 */
export interface PackageVersion extends Node, MetaField<'PackageVersion'> {
	/**
	 * List of files associated with this package version.
	 */
	files: PackageFileConnection;

	/**
	 * The package associated with this version.
	 */
	package?: Nullable<Package>;

	/**
	 * The platform this version was built for.
	 */
	platform?: Nullable<string>;

	/**
	 * Whether or not this version is a pre-release.
	 */
	preRelease: boolean;

	/**
	 * The README of this package version.
	 */
	readme?: Nullable<string>;

	/**
	 * The release associated with this package version.
	 */
	release?: Nullable<Release>;

	/**
	 * Statistics about package activity.
	 */
	statistics?: Nullable<PackageVersionStatistics>;

	/**
	 * The package version summary.
	 */
	summary?: Nullable<string>;

	/**
	 * The version string.
	 */
	version: string;
}

/**
 * Represents a object that contains package version activity statistics such as downloads.
 */
export interface PackageVersionStatistics extends MetaField<'PackageVersionStatistics'> {
	/**
	 * Number of times the package was downloaded since it was created.
	 */
	downloadsTotalCount: number;
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo extends MetaField<'PageInfo'> {
	/**
	 * When paginating forwards, the cursor to continue.
	 */
	endCursor?: Nullable<string>;

	/**
	 * When paginating forwards, are there more items?
	 */
	hasNextPage: boolean;

	/**
	 * When paginating backwards, are there more items?
	 */
	hasPreviousPage: boolean;

	/**
	 * When paginating backwards, the cursor to continue.
	 */
	startCursor?: Nullable<string>;
}

/**
 * A level of permission and source for a user's access to a repository.
 */
export interface PermissionSource extends MetaField<'PermissionSource'> {
	/**
	 * The organization the repository belongs to.
	 */
	organization: Organization;

	/**
	 * The level of access this source has granted to the user.
	 */
	permission: DefaultRepositoryPermissionField;

	/**
	 * The source of this permission.
	 */
	source: PermissionGranter;
}

/**
 * A Pinned Issue is a issue pinned to a repository's index page.
 */
export interface PinnedIssue extends Node, MetaField<'PinnedIssue'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The issue that was pinned.
	 */
	issue: Issue;

	/**
	 * The actor that pinned this issue.
	 */
	pinnedBy: Actor;

	/**
	 * The repository that this issue was pinned to.
	 */
	repository: Repository;
}

/**
 * A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
export interface ProfileItemShowcase extends MetaField<'ProfileItemShowcase'> {
	/**
	 * Whether or not the owner has pinned any repositories or gists.
	 */
	hasPinnedItems: boolean;

	/**
	 * The repositories and gists in the showcase. If the profile owner has any
	 * pinned items, those will be returned. Otherwise, the profile owner's popular
	 * repositories will be returned.
	 */
	items: PinnableItemConnection;
}

/**
 * Projects manage issues, pull requests and notes within a project owner.
 */
export interface Project extends Closable, Node, Updatable, MetaField<'Project'> {
	/**
	 * The project's description body.
	 */
	body?: Nullable<string>;

	/**
	 * The projects description body rendered to HTML.
	 */
	bodyHTML: string;

	/**
	 * List of columns in the project.
	 */
	columns: ProjectColumnConnection;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The actor who originally created the project.
	 */
	creator?: Nullable<Actor>;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The project's name.
	 */
	name: string;

	/**
	 * The project's number.
	 */
	number: number;

	/**
	 * The project's owner. Currently limited to repositories, organizations, and users.
	 */
	owner: ProjectOwner;

	/**
	 * List of pending cards in this project.
	 */
	pendingCards: ProjectCardConnection;

	/**
	 * Project progress details.
	 */
	progress: ProjectProgress;

	/**
	 * Whether the project is open or closed.
	 */
	state: ProjectState;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * A card in a project.
 */
export interface ProjectCard extends UniformResourceLocatable, Node, MetaField<'ProjectCard'> {
	/**
	 * The project column this card is associated under. A card may only belong to one
	 * project column at a time. The column field will be null if the card is created
	 * in a pending state and has yet to be associated with a column. Once cards are
	 * associated with a column, they will not become pending in the future.
	 */
	column?: Nullable<ProjectColumn>;

	/**
	 * The card content item.
	 */
	content?: Nullable<ProjectCardItem>;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The actor who created this card.
	 */
	creator?: Nullable<Actor>;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * Whether the card is archived.
	 */
	isArchived: boolean;

	/**
	 * The card note.
	 */
	note?: Nullable<string>;

	/**
	 * The project that contains this card.
	 */
	project: Project;

	/**
	 * The state of ProjectCard.
	 */
	state?: Nullable<ProjectCardState>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * A column inside a project.
 */
export interface ProjectColumn extends UniformResourceLocatable, Node, MetaField<'ProjectColumn'> {
	/**
	 * List of cards in the column.
	 */
	cards: ProjectCardConnection;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The project column's name.
	 */
	name: string;

	/**
	 * The project that contains this column.
	 */
	project: Project;

	/**
	 * The semantic purpose of the column.
	 */
	purpose?: Nullable<ProjectColumnPurpose>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * Project progress stats.
 */
export interface ProjectProgress extends MetaField<'ProjectProgress'> {
	/**
	 * The number of done cards.
	 */
	doneCount: number;

	/**
	 * The percentage of done cards.
	 */
	donePercentage: number;

	/**
	 * Whether progress tracking is enabled and cards with purpose exist for this project.
	 */
	enabled: boolean;

	/**
	 * The number of in-progress cards.
	 */
	inProgressCount: number;

	/**
	 * The percentage of in-progress cards.
	 */
	inProgressPercentage: number;

	/**
	 * The number of to do cards.
	 */
	todoCount: number;

	/**
	 * The percentage of to do cards.
	 */
	todoPercentage: number;
}

/**
 * A user's public key.
 */
export interface PublicKey extends Node, MetaField<'PublicKey'> {
	/**
	 * The last time this authorization was used to perform an action. Values will be null for keys
	 * not owned by the user.
	 */
	accessedAt?: Nullable<string>;

	/**
	 * Identifies the date and time when the key was created. Keys created before
	 * March 5th, 2014 have inaccurate values. Values will be null for keys not owned by the user.
	 */
	createdAt?: Nullable<string>;

	/**
	 * The fingerprint for this PublicKey.
	 */
	fingerprint: string;

	/**
	 * Whether this PublicKey is read-only or not. Values will be null for keys not owned by the
	 * user.
	 */
	isReadOnly?: Nullable<boolean>;

	/**
	 * The public key string.
	 */
	key: string;

	/**
	 * Identifies the date and time when the key was updated. Keys created before
	 * March 5th, 2014 may have inaccurate values. Values will be null for keys not
	 * owned by the user.
	 */
	updatedAt?: Nullable<string>;
}

/**
 * A repository pull request.
 */
export interface PullRequest
	extends Assignable,
		Closable,
		Comment,
		Labelable,
		Lockable,
		Node,
		Reactable,
		RepositoryNode,
		Subscribable,
		UniformResourceLocatable,
		Updatable,
		UpdatableComment,
		MetaField<'PullRequest'> {
	/**
	 * The number of additions in this pull request.
	 */
	additions: number;

	/**
	 * Returns the auto-merge request object if one exists for this pull request.
	 */
	autoMergeRequest?: Nullable<AutoMergeRequest>;

	/**
	 * Identifies the base Ref associated with the pull request.
	 */
	baseRef?: Nullable<Ref>;

	/**
	 * Identifies the name of the base Ref associated with the pull request, even if the ref has
	 * been deleted.
	 */
	baseRefName: string;

	/**
	 * Identifies the oid of the base ref associated with the pull request, even if the ref has been
	 * deleted.
	 */
	baseRefOid: string;

	/**
	 * The repository associated with this pull request's base Ref.
	 */
	baseRepository?: Nullable<Repository>;

	/**
	 * The number of changed files in this pull request.
	 */
	changedFiles: number;

	/**
	 * The HTTP path for the checks of this pull request.
	 */
	checksResourcePath: string;

	/**
	 * The HTTP URL for the checks of this pull request.
	 */
	checksUrl: string;

	/**
	 * A list of comments associated with the pull request.
	 */
	comments: IssueCommentConnection;

	/**
	 * A list of commits present in this pull request's head branch not present in the base branch.
	 */
	commits: PullRequestCommitConnection;

	/**
	 * The number of deletions in this pull request.
	 */
	deletions: number;

	/**
	 * Lists the files changed within this pull request.
	 */
	files?: Nullable<PullRequestChangedFileConnection>;

	/**
	 * Identifies the head Ref associated with the pull request.
	 */
	headRef?: Nullable<Ref>;

	/**
	 * Identifies the name of the head Ref associated with the pull request, even if the ref has
	 * been deleted.
	 */
	headRefName: string;

	/**
	 * Identifies the oid of the head ref associated with the pull request, even if the ref has
	 * been deleted.
	 */
	headRefOid: string;

	/**
	 * The repository associated with this pull request's head Ref.
	 */
	headRepository?: Nullable<Repository>;

	/**
	 * The owner of the repository associated with this pull request's head Ref.
	 */
	headRepositoryOwner?: Nullable<RepositoryOwner>;

	/**
	 * The hovercard information for this issue.
	 */
	hovercard: Hovercard;

	/**
	 * The head and base repositories are different.
	 */
	isCrossRepository: boolean;

	/**
	 * Identifies if the pull request is a draft.
	 */
	isDraft: boolean;

	/**
	 * Is this pull request read by the viewer.
	 */
	isReadByViewer?: Nullable<boolean>;

	/**
	 * A list of latest reviews per user associated with the pull request.
	 */
	latestOpinionatedReviews?: Nullable<PullRequestReviewConnection>;

	/**
	 * A list of latest reviews per user associated with the pull request that are not also pending
	 * review.
	 */
	latestReviews?: Nullable<PullRequestReviewConnection>;

	/**
	 * Indicates whether maintainers can modify the pull request.
	 */
	maintainerCanModify: boolean;

	/**
	 * The commit that was created when this pull request was merged.
	 */
	mergeCommit?: Nullable<Commit>;

	/**
	 * Whether or not the pull request can be merged based on the existence of merge conflicts.
	 */
	mergeable: MergeableState;

	/**
	 * Whether or not the pull request was merged.
	 */
	merged: boolean;

	/**
	 * The date and time that the pull request was merged.
	 */
	mergedAt?: Nullable<string>;

	/**
	 * The actor who merged the pull request.
	 */
	mergedBy?: Nullable<Actor>;

	/**
	 * Identifies the milestone associated with the pull request.
	 */
	milestone?: Nullable<Milestone>;

	/**
	 * Identifies the pull request number.
	 */
	number: number;

	/**
	 * A list of Users that are participating in the Pull Request conversation.
	 */
	participants: UserConnection;

	/**
	 * The permalink to the pull request.
	 */
	permalink: string;

	/**
	 * The commit that GitHub automatically generated to test if this pull request
	 * could be merged. This field will not return a value if the pull request is
	 * merged, or if the test merge commit is still being generated. See the
	 * `mergeable` field for more details on the mergeability of the pull request.
	 */
	potentialMergeCommit?: Nullable<Commit>;

	/**
	 * List of project cards associated with this pull request.
	 */
	projectCards: ProjectCardConnection;

	/**
	 * The HTTP path for reverting this pull request.
	 */
	revertResourcePath: string;

	/**
	 * The HTTP URL for reverting this pull request.
	 */
	revertUrl: string;

	/**
	 * The current status of this pull request with respect to code review.
	 */
	reviewDecision?: Nullable<PullRequestReviewDecision>;

	/**
	 * A list of review requests associated with the pull request.
	 */
	reviewRequests?: Nullable<ReviewRequestConnection>;

	/**
	 * The list of all review threads for this pull request.
	 */
	reviewThreads: PullRequestReviewThreadConnection;

	/**
	 * A list of reviews associated with the pull request.
	 */
	reviews?: Nullable<PullRequestReviewConnection>;

	/**
	 * Identifies the state of the pull request.
	 */
	state: PullRequestState;

	/**
	 * A list of reviewer suggestions based on commit history and past review comments.
	 */
	suggestedReviewers: Nullable<SuggestedReviewer>[];

	/**
	 * A list of events, comments, commits, etc. associated with the pull request.
	 */
	timelineItems: PullRequestTimelineItemsConnection;

	/**
	 * Identifies the pull request title.
	 */
	title: string;

	/**
	 * Whether or not the viewer can apply suggestion.
	 */
	viewerCanApplySuggestion: boolean;

	/**
	 * Check if the viewer can restore the deleted head ref.
	 */
	viewerCanDeleteHeadRef: boolean;

	/**
	 * Whether or not the viewer can disable auto-merge.
	 */
	viewerCanDisableAutoMerge: boolean;

	/**
	 * Whether or not the viewer can enable auto-merge.
	 */
	viewerCanEnableAutoMerge: boolean;

	/**
	 * The latest review given from the viewer.
	 */
	viewerLatestReview?: Nullable<PullRequestReview>;

	/**
	 * The person who has requested the viewer for review on this pull request.
	 */
	viewerLatestReviewRequest?: Nullable<ReviewRequest>;

	/**
	 * The merge body text for the viewer and method.
	 */
	viewerMergeBodyText: string;

	/**
	 * The merge headline text for the viewer and method.
	 */
	viewerMergeHeadlineText: string;
}

/**
 * A file changed in a pull request.
 */
export interface PullRequestChangedFile extends MetaField<'PullRequestChangedFile'> {
	/**
	 * The number of additions to the file.
	 */
	additions: number;

	/**
	 * The number of deletions to the file.
	 */
	deletions: number;

	/**
	 * The path of the file.
	 */
	path: string;

	/**
	 * The state of the file for the viewer.
	 */
	viewerViewedState: FileViewedState;
}

/**
 * Represents a Git commit part of a pull request.
 */
export interface PullRequestCommit extends Node, UniformResourceLocatable, MetaField<'PullRequestCommit'> {
	/**
	 * The Git commit object.
	 */
	commit: Commit;

	/**
	 * The pull request this commit belongs to.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a commit comment thread part of a pull request.
 */
export interface PullRequestCommitCommentThread
	extends Node,
		RepositoryNode,
		MetaField<'PullRequestCommitCommentThread'> {
	/**
	 * The comments that exist in this thread.
	 */
	comments: CommitCommentConnection;

	/**
	 * The commit the comments were made on.
	 */
	commit: Commit;

	/**
	 * The file the comments were made on.
	 */
	path?: Nullable<string>;

	/**
	 * The position in the diff for the commit that the comment was made on.
	 */
	position?: Nullable<number>;

	/**
	 * The pull request this commit comment thread belongs to.
	 */
	pullRequest: PullRequest;
}

/**
 * This aggregates pull requests opened by a user within one repository.
 */
export interface PullRequestContributionsByRepository extends MetaField<'PullRequestContributionsByRepository'> {
	/**
	 * The pull request contributions.
	 */
	contributions: CreatedPullRequestContributionConnection;

	/**
	 * The repository in which the pull requests were opened.
	 */
	repository: Repository;
}

/**
 * A review object for a given pull request.
 */
export interface PullRequestReview
	extends Comment,
		Deletable,
		Node,
		Reactable,
		RepositoryNode,
		Updatable,
		UpdatableComment,
		UniformResourceLocatable,
		MetaField<'PullRequestReview'> {
	/**
	 * Indicates whether the author of this review has push access to the repository.
	 */
	authorCanPushToRepository: boolean;

	/**
	 * A list of review comments for the current pull request review.
	 */
	comments: PullRequestReviewCommentConnection;

	/**
	 * Identifies the commit associated with this pull request review.
	 */
	commit?: Nullable<Commit>;

	/**
	 * A list of teams that this review was made on behalf of.
	 */
	onBehalfOf: TeamConnection;

	/**
	 * Identifies the pull request associated with this pull request review.
	 */
	pullRequest: PullRequest;

	/**
	 * Identifies the current state of the pull request review.
	 */
	state: PullRequestReviewState;

	/**
	 * Identifies when the Pull Request Review was submitted.
	 */
	submittedAt?: Nullable<string>;
}

/**
 * A review comment associated with a given repository pull request.
 */
export interface PullRequestReviewComment
	extends Comment,
		Deletable,
		Minimizable,
		Node,
		Reactable,
		RepositoryNode,
		Node,
		Updatable,
		UpdatableComment,
		UniformResourceLocatable,
		MetaField<'PullRequestReviewComment'> {
	/**
	 * Identifies the commit associated with the comment.
	 */
	commit?: Nullable<Commit>;

	/**
	 * The diff hunk to which the comment applies.
	 */
	diffHunk: string;

	/**
	 * Identifies when the comment was created in a draft state.
	 */
	draftedAt: string;

	/**
	 * Identifies the original commit associated with the comment.
	 */
	originalCommit?: Nullable<Commit>;

	/**
	 * The original line index in the diff to which the comment applies.
	 */
	originalPosition: number;

	/**
	 * Identifies when the comment body is outdated.
	 */
	outdated: boolean;

	/**
	 * The path to which the comment applies.
	 */
	path: string;

	/**
	 * The line index in the diff to which the comment applies.
	 */
	position?: Nullable<number>;

	/**
	 * The pull request associated with this review comment.
	 */
	pullRequest: PullRequest;

	/**
	 * The pull request review associated with this review comment.
	 */
	pullRequestReview?: Nullable<PullRequestReview>;

	/**
	 * The comment this is a reply to.
	 */
	replyTo?: Nullable<PullRequestReviewComment>;

	/**
	 * Identifies the state of the comment.
	 */
	state: PullRequestReviewCommentState;
}

/**
 * This aggregates pull request reviews made by a user within one repository.
 */
export interface PullRequestReviewContributionsByRepository
	extends MetaField<'PullRequestReviewContributionsByRepository'> {
	/**
	 * The pull request review contributions.
	 */
	contributions: CreatedPullRequestReviewContributionConnection;

	/**
	 * The repository in which the pull request reviews were made.
	 */
	repository: Repository;
}

/**
 * A threaded list of comments for a given pull request.
 */
export interface PullRequestReviewThread extends Node, MetaField<'PullRequestReviewThread'> {
	/**
	 * A list of pull request comments associated with the thread.
	 */
	comments: PullRequestReviewCommentConnection;

	/**
	 * The side of the diff on which this thread was placed.
	 */
	diffSide: DiffSide;

	/**
	 * Whether or not the thread has been collapsed (outdated or resolved)
	 */
	isCollapsed: boolean;

	/**
	 * Indicates whether this thread was outdated by newer changes.
	 */
	isOutdated: boolean;

	/**
	 * Whether this thread has been resolved.
	 */
	isResolved: boolean;

	/**
	 * The line in the file to which this thread refers.
	 */
	line?: Nullable<number>;

	/**
	 * The original line in the file to which this thread refers.
	 */
	originalLine?: Nullable<number>;

	/**
	 * The original start line in the file to which this thread refers (multi-line only).
	 */
	originalStartLine?: Nullable<number>;

	/**
	 * Identifies the file path of this thread.
	 */
	path: string;

	/**
	 * Identifies the pull request associated with this thread.
	 */
	pullRequest: PullRequest;

	/**
	 * Identifies the repository associated with this thread.
	 */
	repository: Repository;

	/**
	 * The user who resolved this thread.
	 */
	resolvedBy?: Nullable<User>;

	/**
	 * The side of the diff that the first line of the thread starts on (multi-line only)
	 */
	startDiffSide?: Nullable<DiffSide>;

	/**
	 * The start line in the file to which this thread refers (multi-line only)
	 */
	startLine?: Nullable<number>;

	/**
	 * Indicates whether the current viewer can reply to this thread.
	 */
	viewerCanReply: boolean;

	/**
	 * Whether or not the viewer can resolve this thread.
	 */
	viewerCanResolve: boolean;

	/**
	 * Whether or not the viewer can unresolve this thread.
	 */
	viewerCanUnresolve: boolean;
}

/**
 * Represents the latest point in the pull request timeline for which the viewer has seen the pull
 * request's commits.
 */
export interface PullRequestRevisionMarker extends MetaField<'PullRequestRevisionMarker'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The last commit the viewer has seen.
	 */
	lastSeenCommit: Commit;

	/**
	 * The pull request to which the marker belongs.
	 */
	pullRequest: PullRequest;
}

/**
 * A Git push.
 */
export interface Push extends Node, MetaField<'Push'> {
	/**
	 * The SHA after the push.
	 */
	nextSha?: Nullable<string>;

	/**
	 * The permalink for this push.
	 */
	permalink: string;

	/**
	 * The SHA before the push.
	 */
	previousSha?: Nullable<string>;

	/**
	 * The user who pushed.
	 */
	pusher: User;

	/**
	 * The repository that was pushed to.
	 */
	repository: Repository;
}

/**
 * A team, user or app who has the ability to push to a protected branch.
 */
export interface PushAllowance extends Node, MetaField<'PushAllowance'> {
	/**
	 * The actor that can push.
	 */
	actor?: Nullable<PushAllowanceActor>;

	/**
	 * Identifies the branch protection rule associated with the allowed user or team.
	 */
	branchProtectionRule?: Nullable<BranchProtectionRule>;
}

/**
 * Represents the client's rate limit.
 */
export interface RateLimit extends MetaField<'RateLimit'> {
	/**
	 * The point cost for the current query counting against the rate limit.
	 */
	cost: number;

	/**
	 * The maximum number of points the client is permitted to consume in a 60 minute window.
	 */
	limit: number;

	/**
	 * The maximum number of nodes this query may return.
	 */
	nodeCount: number;

	/**
	 * The number of points remaining in the current rate limit window.
	 */
	remaining: number;

	/**
	 * The time at which the current rate limit window resets in UTC epoch seconds.
	 */
	resetAt: string;

	/**
	 * The number of points used in the current rate limit window.
	 */
	used: number;
}

/**
 * An emoji reaction to a particular piece of content.
 */
export interface Reaction extends Node, MetaField<'Reaction'> {
	/**
	 * Identifies the emoji reaction.
	 */
	content: ReactionContent;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The reactable piece of content.
	 */
	reactable: Reactable;

	/**
	 * Identifies the user who created this reaction.
	 */
	user?: Nullable<User>;
}

/**
 * Represents a Git reference.
 */
export interface Ref extends Node, MetaField<'Ref'> {
	/**
	 * A list of pull requests with this ref as the head ref.
	 */
	associatedPullRequests: PullRequestConnection;

	/**
	 * Branch protection rules for this ref.
	 */
	branchProtectionRule?: Nullable<BranchProtectionRule>;

	/**
	 * The ref name.
	 */
	name: string;

	/**
	 * The ref's prefix, such as `refs/heads/` or `refs/tags/`.
	 */
	prefix: string;

	/**
	 * Branch protection rules that are viewable by non-admins.
	 */
	refUpdateRule?: Nullable<RefUpdateRule>;

	/**
	 * The repository the ref belongs to.
	 */
	repository: Repository;

	/**
	 * The object the ref points to. Returns null when object does not exist.
	 */
	target?: Nullable<GitObject>;
}

/**
 * A ref update rule for a viewer.
 */
export interface RefUpdateRule extends MetaField<'RefUpdateRule'> {
	/**
	 * Can this branch be deleted.
	 */
	allowsDeletions: boolean;

	/**
	 * Are force pushes allowed on this branch.
	 */
	allowsForcePushes: boolean;

	/**
	 * Identifies the protection rule pattern.
	 */
	pattern: string;

	/**
	 * Number of approving reviews required to update matching branches.
	 */
	requiredApprovingReviewCount?: Nullable<number>;

	/**
	 * List of required status check contexts that must pass for commits to be accepted to matching
	 * branches.
	 */
	requiredStatusCheckContexts?: Nullable<Nullable<string>[]>;

	/**
	 * Are reviews from code owners required to update matching branches.
	 */
	requiresCodeOwnerReviews: boolean;

	/**
	 * Are merge commits prohibited from being pushed to this branch.
	 */
	requiresLinearHistory: boolean;

	/**
	 * Are commits required to be signed.
	 */
	requiresSignatures: boolean;

	/**
	 * Is the viewer allowed to dismiss reviews.
	 */
	viewerAllowedToDismissReviews: boolean;

	/**
	 * Can the viewer push to the branch.
	 */
	viewerCanPush: boolean;
}

/**
 * A release contains the content for a release.
 */
export interface Release extends Node, UniformResourceLocatable, MetaField<'Release'> {
	/**
	 * The author of the release.
	 */
	author?: Nullable<User>;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The description of the release.
	 */
	description?: Nullable<string>;

	/**
	 * The description of this release rendered to HTML.
	 */
	descriptionHTML?: Nullable<string>;

	/**
	 * Whether or not the release is a draft.
	 */
	isDraft: boolean;

	/**
	 * Whether or not the release is the latest releast.
	 */
	isLatest: boolean;

	/**
	 * Whether or not the release is a prerelease.
	 */
	isPrerelease: boolean;

	/**
	 * The title of the release.
	 */
	name?: Nullable<string>;

	/**
	 * Identifies the date and time when the release was created.
	 */
	publishedAt?: Nullable<string>;

	/**
	 * List of releases assets which are dependent on this release.
	 */
	releaseAssets: ReleaseAssetConnection;

	/**
	 * The repository that the release belongs to.
	 */
	repository: Repository;

	/**
	 * A description of the release, rendered to HTML without any links in it.
	 */
	shortDescriptionHTML?: Nullable<string>;

	/**
	 * The Git tag the release points to.
	 */
	tag?: Nullable<Ref>;

	/**
	 * The tag commit for this release.
	 */
	tagCommit?: Nullable<Commit>;

	/**
	 * The name of the release's Git tag.
	 */
	tagName: string;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * A release asset contains the content for a release asset.
 */
export interface ReleaseAsset extends Node, MetaField<'ReleaseAsset'> {
	/**
	 * The asset's content-type.
	 */
	contentType: string;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The number of times this asset was downloaded.
	 */
	downloadCount: number;

	/**
	 * Identifies the URL where you can download the release asset via the browser.
	 */
	downloadUrl: string;

	/**
	 * Identifies the title of the release asset.
	 */
	name: string;

	/**
	 * Release that the asset is associated with.
	 */
	release?: Nullable<Release>;

	/**
	 * The size (in bytes) of the asset.
	 */
	size: number;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * The user that performed the upload.
	 */
	uploadedBy: User;

	/**
	 * Identifies the URL of the release asset.
	 */
	url: string;
}

/**
 * A group of emoji reactions to a particular piece of content.
 */
export interface ReactionGroup extends MetaField<'ReactionGroup'> {
	/**
	 * Identifies the emoji reaction.
	 */
	content: ReactionContent;

	/**
	 * Identifies when the reaction was created.
	 */
	createdAt?: Nullable<string>;

	/**
	 * The subject that was reacted to.
	 */
	subject: Reactable;

	/**
	 * Users who have reacted to the reaction subject with the emotion represented by this reaction
	 * group.
	 */
	users: ReactingUserConnection;

	/**
	 * Whether or not the authenticated user has left a reaction on the subject.
	 */
	viewerHasReacted: boolean;
}

/**
 * A repository contains the content for a project.
 */
export interface Repository
	extends Node,
		PackageOwner,
		ProjectOwner,
		RepositoryInfo,
		Starrable,
		Subscribable,
		UniformResourceLocatable,
		MetaField<'Repository'> {
	/**
	 * A list of users that can be assigned to issues in this repository.
	 */
	assignableUsers: UserConnection;

	/**
	 * A list of branch protection rules for this repository.
	 */
	branchProtectionRules: BranchProtectionRuleConnection;

	/**
	 * Returns the code of conduct for this repository.
	 */
	codeOfConduct?: Nullable<CodeOfConduct>;

	/**
	 * A list of collaborators associated with the repository.
	 */
	collaborators?: Nullable<RepositoryCollaboratorConnection>;

	/**
	 * A list of commit comments associated with the repository.
	 */
	commitComments: CommitCommentConnection;

	/**
	 * Returns a list of contact links associated to the repository.
	 */
	contactLinks?: Nullable<RepositoryContactLink[]>;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The Ref associated with the repository's default branch.
	 */
	defaultBranchRef?: Nullable<Ref>;

	/**
	 * Whether or not branches are automatically deleted when merged in this repository.
	 */
	deleteBranchOnMerge: boolean;

	/**
	 * A list of deploy keys that are on this repository.
	 */
	deployKeys: DeployKeyConnection;

	/**
	 * Deployments associated with the repository.
	 */
	deployments: DeploymentConnection;

	/**
	 * The number of kilobytes this repository occupies on disk.
	 */
	diskUsage?: Nullable<number>;

	/**
	 * A list of direct forked repositories.
	 */
	forks: RepositoryConnection;

	/**
	 * The funding links for this repository.
	 */
	fundingLinks: FundingLink[];

	/**
	 * The interaction ability settings for this repository.
	 */
	interactionAbility?: Nullable<RepositoryInteractionAbility>;

	/**
	 * Returns true if blank issue creation is allowed.
	 */
	isBlankIssuesEnabled: boolean;

	/**
	 * Returns whether or not this repository disabled.
	 */
	isDisabled: boolean;

	/**
	 * Returns whether or not this repository is empty.
	 */
	isEmpty: boolean;

	/**
	 * Returns true if this repository has a security policy.
	 */
	isSecurityPolicyEnabled?: Nullable<boolean>;

	/**
	 * Identifies if the repository is a template that can be used to generate new repositories.
	 */
	isTemplate: boolean;

	/**
	 * Is this repository a user configuration repository?
	 */
	isUserConfigurationRepository: boolean;

	/**
	 * Returns a single issue from the current repository by number.
	 */
	issue?: Nullable<Issue>;

	/**
	 * Returns a single issue-like object from the current repository by number.
	 */
	issueOrPullRequest?: Nullable<IssueOrPullRequest>;

	/**
	 * Returns a list of issue templates associated to the repository.
	 */
	issueTemplates?: Nullable<IssueTemplate[]>;

	/**
	 * A list of issues that have been opened in the repository.
	 */
	issues: IssueConnection;

	/**
	 * Returns a single label by name.
	 */
	label?: Nullable<Label>;

	/**
	 * A list of labels associated with the repository.
	 */
	labels?: Nullable<LabelConnection>;

	/**
	 * A list containing a breakdown of the language composition of the repository.
	 */
	languages?: Nullable<LanguageConnection>;

	/**
	 * Get the latest release for the repository if one exists.
	 */
	latestRelease?: Nullable<Release>;

	/**
	 * A list of Users that can be mentioned in the context of the repository.
	 */
	mentionableUsers: UserConnection;

	/**
	 * Whether or not PRs are merged with a merge commit on this repository.
	 */
	mergeCommitAllowed: boolean;

	/**
	 * Returns a single milestone from the current repository by number.
	 */
	milestone?: Nullable<Milestone>;

	/**
	 * A list of milestones associated with the repository.
	 */
	milestones?: Nullable<MilestoneConnection>;

	/**
	 * A Git object in the repository.
	 */
	object?: Nullable<GitObject>;

	/**
	 * The repository parent, if this is a fork.
	 */
	parent?: Nullable<Repository>;

	/**
	 * A list of pinned issues for this repository.
	 */
	pinnedIssues?: Nullable<PinnedIssueConnection>;

	/**
	 * The primary language of the repository's code.
	 */
	primaryLanguage?: Nullable<Language>;

	/**
	 * Returns a single pull request from the current repository by number.
	 */
	pullRequest?: Nullable<PullRequest>;

	/**
	 * A list of pull requests that have been opened in the repository.
	 */
	pullRequests: PullRequestConnection;

	/**
	 * Whether or not rebase-merging is enabled on this repository.
	 */
	rebaseMergeAllowed: boolean;

	/**
	 * Fetch a given ref from the repository.
	 */
	ref?: Nullable<Ref>;

	/**
	 * Fetch a list of refs from the repository.
	 */
	refs?: Nullable<RefConnection>;

	/**
	 * Lookup a single release given various criteria.
	 */
	release?: Nullable<Release>;

	/**
	 * List of releases which are dependent on this repository.
	 */
	releases: ReleaseConnection;

	/**
	 * A list of applied repository-topic associations for this repository.
	 */
	repositoryTopics: RepositoryTopicConnection;

	/**
	 * The security policy URL.
	 */
	securityPolicyUrl?: Nullable<string>;

	/**
	 * Whether or not squash-merging is enabled on this repository.
	 */
	squashMergeAllowed: boolean;

	/**
	 * The SSH URL to clone this repository.
	 */
	sshUrl: string;

	/**
	 * Returns a list of all submodules in this repository parsed from the
	 * .gitmodules file as of the default branch's HEAD commit.
	 */
	submodules: SubmoduleConnection;

	/**
	 * Temporary authentication token for cloning this repository.
	 */
	tempCloneToken?: Nullable<string>;

	/**
	 * The repository from which this repository was generated, if any.
	 */
	templateRepository?: Nullable<Repository>;

	/**
	 * Indicates whether the viewer has admin permissions on this repository.
	 */
	viewerCanAdminister: boolean;

	/**
	 * Indicates whether the viewer can update the topics of this repository.
	 */
	viewerCanUpdateTopics: boolean;

	/**
	 * The last commit email for the viewer.
	 */
	viewerDefaultCommitEmail?: Nullable<string>;

	/**
	 * The last used merge method by the viewer or the default for the repository.
	 */
	viewerDefaultMergeMethod: PullRequestMergeMethod;

	/**
	 * The users permission level on the repository. Will return null if authenticated as an
	 * GitHub App.
	 */
	viewerPermission?: Nullable<RepositoryPermission>;

	/**
	 * A list of emails this viewer can commit with.
	 */
	viewerPossibleCommitEmails?: Nullable<string[]>;

	/**
	 * A list of vulnerability alerts that are on this repository.
	 */
	vulnerabilityAlerts?: Nullable<RepositoryVulnerabilityAlertConnection>;

	/**
	 * A list of users watching the repository.
	 */
	watchers: UserConnection;
}

/**
 * A repository contact link.
 */
export interface RepositoryContactLink extends MetaField<'RepositoryContactLink'> {
	/**
	 * The contact link purpose.
	 */
	about: string;

	/**
	 * The contact link name.
	 */
	name: string;

	/**
	 * The contact link URL.
	 */
	url: string;
}

/**
 * Repository interaction limit that applies to this object.
 */
export interface RepositoryInteractionAbility extends MetaField<'RepositoryInteractionAbility'> {
	/**
	 * The time the currently active limit expires.
	 */
	expiresAt?: Nullable<string>;

	/**
	 * The current limit that is enabled on this object.
	 */
	limit: RepositoryInteractionLimit;

	/**
	 * The origin of the currently active interaction limit.
	 */
	origin: RepositoryInteractionLimitOrigin;
}

/**
 * An invitation for a user to be added to a repository.
 */
export interface RepositoryInvitation extends Node, MetaField<'RepositoryInvitation'> {
	/**
	 * The email address that received the invitation.
	 */
	email?: Nullable<string>;

	/**
	 * The user who received the invitation.
	 */
	invitee?: Nullable<User>;

	/**
	 * The user who created the invitation.
	 */
	inviter: User;

	/**
	 * The permalink for this repository invitation.
	 */
	permalink: string;

	/**
	 * The permission granted on this repository by this invitation.
	 */
	permission: RepositoryPermission;

	/**
	 * The Repository the user is invited to.
	 */
	repository?: Nullable<RepositoryInfo>;
}

/**
 * A repository-topic connects a repository to a topic.
 */
export interface RepositoryTopic extends Node, UniformResourceLocatable, MetaField<'RepositoryTopic'> {
	/**
	 * The topic.
	 */
	topic: Topic;
}

/**
 * A hovercard context with a message describing the current code review state of the pull
 * request.
 */
export interface ReviewStatusHovercardContext extends HovercardContext, MetaField<'ReviewStatusHovercardContext'> {
	/**
	 * The current status of the pull request with respect to code review.
	 */
	reviewDecision?: Nullable<PullRequestReviewDecision>;
}

/**
 * Represents an S/MIME signature on a Commit or Tagsecur.
 */
export type SmimeSignature = GitSignature & MetaField<'SmimeSignature'>;
/**
 * A goal associated with a GitHub Sponsors listing, representing a target the sponsored maintainer
 * would like to attain.
 */
export interface SponsorsGoal extends MetaField<'SponsorsGoal'> {
	/**
	 * A description of the goal from the maintainer.
	 */
	description?: Nullable<string>;

	/**
	 * What the objective of this goal is.
	 */
	kind: SponsorsGoalKind;

	/**
	 * The percentage representing how complete this goal is, between 0-100.
	 */
	percentComplete: number;

	/**
	 * What the goal amount is. Represents a dollar amount for monthly sponsorship
	 * amount goals. Represents a count of unique sponsors for total sponsors count goals.
	 */
	targetValue: number;

	/**
	 * A brief summary of the kind and target value of this goal.
	 */
	title: string;
}

/**
 * A GitHub Sponsors listing.
 */
export interface SponsorsListing extends Node, MetaField<'SponsorsListing'> {
	/**
	 * The current goal the maintainer is trying to reach with GitHub Sponsors, if any.
	 */
	activeGoal?: Nullable<SponsorsGoal>;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The full description of the listing.
	 */
	fullDescription: string;

	/**
	 * The full description of the listing rendered to HTML.
	 */
	fullDescriptionHTML: string;

	/**
	 * The listing's full name.
	 */
	name: string;

	/**
	 * The short description of the listing.
	 */
	shortDescription: string;

	/**
	 * The short name of the listing.
	 */
	slug: string;

	/**
	 * The published tiers for this GitHub Sponsors listing.
	 */
	tiers?: Nullable<SponsorsTierConnection>;
}

/**
 * SponsorsTier information only visible to users that can administer the associated Sponsors
 * listing.
 */
export interface SponsorsTierAdminInfo extends MetaField<'SponsorsTierAdminInfo'> {
	/**
	 * The sponsorships associated with this tier.
	 */
	sponsorships: SponsorshipConnection;
}

/**
 * A sponsorship relationship between a sponsor and a maintainer.
 */
export interface Sponsorship extends Node, MetaField<'Sponsorship'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Whether this sponsorship represents a one-time payment versus a recurring sponsorship.
	 */
	isOneTimePayment: boolean;

	/**
	 * The privacy level for this sponsorship.
	 */
	privacyLevel: SponsorshipPrivacy;

	/**
	 * The user or organization that is sponsoring, if you have permission to view them.
	 */
	sponsorEntity?: Nullable<Sponsor>;

	/**
	 * The entity that is being sponsored.
	 */
	sponsorable: Sponsorable;

	/**
	 * The associated sponsorship tier.
	 */
	tier?: Nullable<SponsorsTier>;
}

/**
 * Represents a commit status.
 */
export interface Status extends Node, MetaField<'Status'> {
	/**
	 * A list of status contexts and check runs for this commit.
	 */
	combinedContexts: StatusCheckRollupContextConnection;

	/**
	 * The commit this status is attached to.
	 */
	commit?: Nullable<Commit>;

	/**
	 * Looks up an individual status context by context name.
	 */
	context?: Nullable<StatusContext>;

	/**
	 * The individual status contexts for this commit.
	 */
	contexts: StatusContext[];

	/**
	 * The combined commit status.
	 */
	state: StatusState;
}

/**
 * A alert for a repository with an affected vulnerability.
 */
export interface RepositoryVulnerabilityAlert extends Node, RepositoryNode, MetaField<'RepositoryVulnerabilityAlert'> {
	/**
	 * When was the alert created?
	 */
	createdAt: string;

	/**
	 * The reason the alert was dismissed.
	 */
	dismissReason?: Nullable<string>;

	/**
	 * When was the alert dismissed?
	 */
	dismissedAt?: Nullable<string>;

	/**
	 * The user who dismissed the alert.
	 */
	dismisser?: Nullable<User>;

	/**
	 * The associated security advisory.
	 */
	securityAdvisory?: Nullable<SecurityAdvisory>;

	/**
	 * The associated security vulnerability.
	 */
	securityVulnerability?: Nullable<SecurityVulnerability>;

	/**
	 * The vulnerable manifest filename.
	 */
	vulnerableManifestFilename: string;

	/**
	 * The vulnerable manifest path.
	 */
	vulnerableManifestPath: string;

	/**
	 * The vulnerable requirements.
	 */
	vulnerableRequirements?: Nullable<string>;
}

/**
 * Represents a private contribution a user made on GitHub.
 */
export type RestrictedContribution = UniformResourceLocatable & Contribution & MetaField<'RestrictedContribution'>;

/**
 * A team or user who has the ability to dismiss a review on a protected branch.
 */
export interface ReviewDismissalAllowance extends Node, MetaField<'ReviewDismissalAllowance'> {
	/**
	 * The actor that can dismiss.
	 */
	actor?: Nullable<ReviewDismissalAllowanceActor>;

	/**
	 * Identifies the branch protection rule associated with the allowed user or team.
	 */
	branchProtectionRule?: Nullable<BranchProtectionRule>;
}

/**
 * A request for a user to review a pull request.
 */
export interface ReviewRequest extends Node, MetaField<'ReviewRequest'> {
	/**
	 * Whether this request was created for a code owner.
	 */
	asCodeOwner: boolean;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * Identifies the pull request associated with this review request.
	 */
	pullRequest: PullRequest;

	/**
	 * The reviewer that is requested.
	 */
	requestedReviewer?: Nullable<RequestedReviewer>;
}

/**
 * A Saved Reply is text a user can use to reply quickly.
 */
export interface SavedReply extends Node, MetaField<'SavedReply'> {
	/**
	 * The body of the saved reply.
	 */
	body: string;

	/**
	 * The saved reply body rendered to HTML.
	 */
	bodyHTML: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The title of the saved reply.
	 */
	title: string;

	/**
	 * The user that saved this reply.
	 */
	user?: Nullable<Actor>;
}

/**
 * A GitHub Security Advisory.
 */
export interface SecurityAdvisory extends Node, MetaField<'SecurityAdvisory'> {
	/**
	 * The CVSS associated with this advisory.
	 */
	cvss: CVSS;

	/**
	 * CWEs associated with this Advisory.
	 */
	cwes: CWEConnection;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * This is a long plaintext description of the advisory.
	 */
	description: string;

	/**
	 * The GitHub Security Advisory ID.
	 */
	ghsaId: string;

	/**
	 * A list of identifiers for this advisory.
	 */
	identifiers: SecurityAdvisoryIdentifier[];

	/**
	 * The permalink for the advisory's dependabot alerts page.
	 */
	notificationsPermalink?: Nullable<string>;

	/**
	 * The organization that originated the advisory.
	 */
	origin: string;

	/**
	 * The permalink for the advisory.
	 */
	permalink?: Nullable<string>;

	/**
	 * When the advisory was published.
	 */
	publishedAt: string;

	/**
	 * A list of references for this advisory.
	 */
	references: SecurityAdvisoryReference[];

	/**
	 * The severity of the advisory.
	 */
	severity: SecurityAdvisorySeverity;

	/**
	 * A short plaintext summary of the advisory.
	 */
	summary: string;

	/**
	 * When the advisory was last updated.
	 */
	updatedAt: string;

	/**
	 * Vulnerabilities associated with this Advisory.
	 */
	vulnerabilities: SecurityVulnerabilityConnection;

	/**
	 * When the advisory was withdrawn, if it has been withdrawn.
	 */
	withdrawnAt?: Nullable<string>;
}

/**
 * A GitHub Security Advisory Identifier.
 */
export interface SecurityAdvisoryIdentifier extends MetaField<'SecurityAdvisoryIdentifier'> {
	/**
	 * The identifier type.
	 */
	type: string;

	/**
	 * The identifier.
	 */
	value: string;
}

/**
 * An individual package.
 */
export interface SecurityAdvisoryPackage extends MetaField<'SecurityAdvisoryPackage'> {
	/**
	 * The ecosystem the package belongs to, e.g. RUBYGEMS, NPM.
	 */
	ecosystem: SecurityAdvisoryEcosystem;

	/**
	 * The package name.
	 */
	name: string;
}

/**
 * An individual package version.
 */
export interface SecurityAdvisoryPackageVersion extends MetaField<'SecurityAdvisoryPackageVersion'> {
	/**
	 * The package name or version.
	 */
	identifier: string;
}

/**
 * A GitHub Security Advisory Reference.
 */
export interface SecurityAdvisoryReference extends MetaField<'SecurityAdvisoryReference'> {
	/**
	 * A publicly accessible reference.
	 */
	url: string;
}

/**
 * An individual vulnerability within an Advisory.
 */
export interface SecurityVulnerability extends MetaField<'SecurityVulnerability'> {
	/**
	 * The Advisory associated with this Vulnerability.
	 */
	advisory: SecurityAdvisory;

	/**
	 * The first version containing a fix for the vulnerability.
	 */
	firstPatchedVersion?: Nullable<SecurityAdvisoryPackageVersion>;

	/**
	 * A description of the vulnerable package.
	 */
	package: SecurityAdvisoryPackage;

	/**
	 * The severity of the vulnerability within this package.
	 */
	severity: SecurityAdvisorySeverity;

	/**
	 * When the vulnerability was last updated.
	 */
	updatedAt: string;

	/**
	 * A string that describes the vulnerable package versions.
	 * This string follows a basic syntax with a few forms.
	 * + `0.2.0` denotes a single vulnerable version.
	 * + `<1.0.8` denotes a version range up to and including the specified version
	 * + `< 0.1.11` denotes a version range up to, but excluding, the specified version
	 * + `>4.3.0, < 4.3.5` denotes a version range with a known minimum and maximum version.
	 * + `>0.0.1` denotes a version range with a known minimum, but no known maximum.
	 */
	vulnerableVersionRange: string;
}

/**
 * A GitHub Sponsors tier associated with a GitHub Sponsors listing.
 */
export interface SponsorsTier extends Node, MetaField<'SponsorsTier'> {
	/**
	 * SponsorsTier information only visible to users that can administer the associated Sponsors
	 * listing.
	 */
	adminInfo?: Nullable<SponsorsTierAdminInfo>;

	/**
	 * Get a different tier for this tier's maintainer that is at the same frequency as this tier
	 * but with a lesser cost. Returns the published tier with the monthly price closest to this
	 * tier's without going over.
	 */
	closestLesserValueTier?: Nullable<SponsorsTier>;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The description of the tier.
	 */
	description: string;

	/**
	 * The tier description rendered to HTML.
	 */
	descriptionHTML: string;

	/**
	 * Whether this tier was chosen at checkout time by the sponsor rather than defined ahead of
	 * time by the maintainer who manages the Sponsors listing.
	 */
	isCustomAmount: boolean;

	/**
	 * Whether this tier is only for use with one-time sponsorships.
	 */
	isOneTime: boolean;

	/**
	 * How much this tier costs per month in cents.
	 */
	monthlyPriceInCents: number;

	/**
	 * How much this tier costs per month in dollars.
	 */
	monthlyPriceInDollars: number;

	/**
	 * The name of the tier.
	 */
	name: string;

	/**
	 * The sponsors listing that this tier belongs to.
	 */
	sponsorsListing: SponsorsListing;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * Represents the rollup for both the check runs and status for a commit.
 */
export interface StatusCheckRollup extends Node, MetaField<'StatusCheckRollup'> {
	/**
	 * The commit the status and check runs are attached to.
	 */
	commit?: Nullable<Commit>;

	/**
	 * A list of status contexts and check runs for this commit.
	 */
	contexts: StatusCheckRollupContextConnection;

	/**
	 * The combined status for the commit.
	 */
	state: StatusState;
}

/**
 * Represents an individual commit status context.
 */
export interface StatusContext extends Node, RequirableByPullRequest, MetaField<'StatusContext'> {
	/**
	 * The avatar of the OAuth application or the user that created the status.
	 */
	avatarUrl?: Nullable<string>;

	/**
	 * This commit this status context is attached to.
	 */
	commit?: Nullable<Commit>;

	/**
	 * The name of this status context.
	 */
	context: string;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The actor who created this status context.
	 */
	creator?: Nullable<Actor>;

	/**
	 * The description for this status context.
	 */
	description?: Nullable<string>;

	/**
	 * The state of this status context.
	 */
	state: StatusState;

	/**
	 * The URL for this status context.
	 */
	targetUrl?: Nullable<string>;
}

/**
 * A pointer to a repository at a specific revision embedded inside another repository.
 */
export interface Submodule extends MetaField<'Submodule'> {
	/**
	 * The branch of the upstream submodule for tracking updates.
	 */
	branch?: Nullable<string>;

	/**
	 * The git URL of the submodule repository.
	 */
	gitUrl: string;

	/**
	 * The name of the submodule in .gitmodules.
	 */
	name: string;

	/**
	 * The path in the superproject that this submodule is located in.
	 */
	path: string;

	/**
	 * The commit revision of the subproject repository being tracked by the submodule.
	 */
	subprojectCommitOid?: Nullable<string>;
}

/**
 * A suggestion to review a pull request based on a user's commit history and review comments.
 */
export interface SuggestedReviewer extends MetaField<'SuggestedReviewer'> {
	/**
	 * Is this suggestion based on past commits?
	 */
	isAuthor: boolean;

	/**
	 * Is this suggestion based on past review comments?
	 */
	isCommenter: boolean;

	/**
	 * Identifies the user suggested to review the pull request.
	 */
	reviewer: User;
}

/**
 * Represents a Git tag.
 */
export interface Tag extends GitObject, Node, MetaField<'Tag'> {
	/**
	 * The Git tag message.
	 */
	message?: Nullable<string>;

	/**
	 * The Git tag name.
	 */
	name: string;

	/**
	 * Details about the tag author.
	 */
	tagger?: Nullable<GitActor>;

	/**
	 * The Git object the tag points to.
	 */
	target: GitObject;
}

/**
 * A team of users in an organization.
 */
export interface Team extends UniformResourceLocatable, MemberStatusable, Node, Subscribable, MetaField<'Team'> {
	/**
	 * A list of teams that are ancestors of this team.
	 */
	ancestors: TeamConnection;

	/**
	 * A URL pointing to the team's avatar.
	 */
	avatarUrl?: Nullable<string>;

	/**
	 * List of child teams belonging to this team.
	 */
	childTeams: TeamConnection;

	/**
	 * The slug corresponding to the organization and team.
	 */
	combinedSlug: string;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The description of the team.
	 */
	description?: Nullable<string>;

	/**
	 * Find a team discussion by its number.
	 */
	discussion?: Nullable<TeamDiscussion>;

	/**
	 * A list of team discussions.
	 */
	discussions: TeamDiscussionConnection;

	/**
	 * The HTTP path for team discussions.
	 */
	discussionsResourcePath: string;

	/**
	 * The HTTP URL for team discussions.
	 */
	discussionsUrl: string;

	/**
	 * The HTTP path for editing this team.
	 */
	editTeamResourcePath: string;

	/**
	 * The HTTP URL for editing this team.
	 */
	editTeamUrl: string;

	/**
	 * A list of pending invitations for users to this team.
	 */
	invitations?: Nullable<OrganizationInvitationConnection>;

	/**
	 * A list of users who are members of this team.
	 */
	members: TeamMemberConnection;

	/**
	 * The HTTP path for the team' members.
	 */
	membersResourcePath: string;

	/**
	 * The HTTP URL for the team' members.
	 */
	membersUrl: string;

	/**
	 * The name of the team.
	 */
	name: string;

	/**
	 * The HTTP path creating a new team.
	 */
	newTeamResourcePath: string;

	/**
	 * The HTTP URL creating a new team.
	 */
	newTeamUrl: string;

	/**
	 * The organization that owns this team.
	 */
	organization: Organization;

	/**
	 * The parent team of the team.
	 */
	parentTeam?: Nullable<Team>;

	/**
	 * The level of privacy the team has.
	 */
	privacy: TeamPrivacy;

	/**
	 * A list of repositories this team has access to.
	 */
	repositories: TeamRepositoryConnection;

	/**
	 * The HTTP path for this team's repositories.
	 */
	repositoriesResourcePath: string;

	/**
	 * The HTTP URL for this team's repositories.
	 */
	repositoriesUrl: string;

	/**
	 * The slug corresponding to the team.
	 */
	slug: string;

	/**
	 * The HTTP path for this team's teams.
	 */
	teamsResourcePath: string;

	/**
	 * The HTTP URL for this team's teams.
	 */
	teamsUrl: string;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * Team is adminable by the viewer.
	 */
	viewerCanAdminister: boolean;
}

/**
 * A team discussion.
 */
export interface TeamDiscussion
	extends Comment,
		Deletable,
		Node,
		Reactable,
		Subscribable,
		UniformResourceLocatable,
		Updatable,
		UpdatableComment,
		MetaField<'TeamDiscussion'> {
	/**
	 * Identifies the discussion body hash.
	 */
	bodyVersion: string;

	/**
	 * A list of comments on this discussion.
	 */
	comments: TeamDiscussionCommentConnection;

	/**
	 * The HTTP path for discussion comments.
	 */
	commentsResourcePath: string;

	/**
	 * The HTTP URL for discussion comments.
	 */
	commentsUrl: string;

	/**
	 * Whether or not the discussion is pinned.
	 */
	isPinned: boolean;

	/**
	 * Whether or not the discussion is only visible to team members and org admins.
	 */
	isPrivate: boolean;

	/**
	 * Identifies the discussion within its team.
	 */
	number: number;

	/**
	 * The team that defines the context of this discussion.
	 */
	team: Team;

	/**
	 * The title of the discussion.
	 */
	title: string;

	/**
	 * Whether or not the current viewer can pin this discussion.
	 */
	viewerCanPin: boolean;
}

/**
 * A comment on a team discussion.
 */
export interface TeamDiscussionComment
	extends Comment,
		Deletable,
		Node,
		Reactable,
		UniformResourceLocatable,
		Updatable,
		UpdatableComment,
		MetaField<'TeamDiscussionComment'> {
	/**
	 * The current version of the body content.
	 */
	bodyVersion: string;

	/**
	 * The discussion this comment is about.
	 */
	discussion: TeamDiscussion;

	/**
	 * Identifies the comment number.
	 */
	number: number;
}

/**
 * A text match within a search result.
 */
export interface TextMatch extends MetaField<'TextMatch'> {
	/**
	 * The specific text fragment within the property matched on.
	 */
	fragment: string;

	/**
	 * Highlights within the matched fragment.
	 */
	highlights: TextMatchHighlight[];

	/**
	 * The property matched on.
	 */
	property: string;
}

/**
 * Represents a single highlight in a search result match.
 */
export interface TextMatchHighlight extends MetaField<'TextMatchHighlight'> {
	/**
	 * The indice in the fragment where the matched text begins.
	 */
	beginIndice: number;

	/**
	 * The indice in the fragment where the matched text ends.
	 */
	endIndice: number;

	/**
	 * The text matched.
	 */
	text: string;
}

/**
 * A topic aggregates entities that are related to a subject.
 */
export interface Topic extends Node, Starrable, MetaField<'Topic'> {
	/**
	 * The topic's name.
	 */
	name: string;

	/**
	 * A list of related topics, including aliases of this topic, sorted with the most relevant
	 * first. Returns up to 10 Topics.
	 */
	relatedTopics: Topic[];
}

/**
 * Represents a Git tree.
 */
export interface Tree extends GitObject, Node, MetaField<'Tree'> {
	/**
	 * A list of tree entries.
	 */
	entries?: Nullable<TreeEntry[]>;
}

/**
 * Represents a Git tree entry.
 */
export interface TreeEntry extends MetaField<'TreeEntry'> {
	/**
	 * The extension of the file.
	 */
	extension?: Nullable<string>;

	/**
	 * Whether or not this tree entry is generated.
	 */
	isGenerated: boolean;

	/**
	 * Entry file mode.
	 */
	mode: number;

	/**
	 * Entry file name.
	 */
	name: string;

	/**
	 * Entry file object.
	 */
	object?: Nullable<GitObject>;

	/**
	 * Entry file Git object ID.
	 */
	oid: string;

	/**
	 * The full path of the file.
	 */
	path?: Nullable<string>;

	/**
	 * The Repository the tree entry belongs to.
	 */
	repository: Repository;

	/**
	 * If the TreeEntry is for a directory occupied by a submodule project, this returns the
	 * corresponding submodule.
	 */
	submodule?: Nullable<Submodule>;

	/**
	 * Entry file interface.
	 */
	interface: string;
}

/**
 * Represents an unknown signature on a Commit or Tag.
 */
export type UnknownSignature = GitSignature & MetaField<'UnknownSignature'>;

/**
 * A user is an individual's account on GitHub that owns repositories and can make new content.
 */
export interface User
	extends Actor,
		Node,
		PackageOwner,
		ProfileOwner,
		ProjectOwner,
		RepositoryOwner,
		Sponsorable,
		UniformResourceLocatable,
		MetaField<'User'> {
	/**
	 * The user's public profile bio.
	 */
	bio?: Nullable<string>;

	/**
	 * The user's public profile bio as HTML.
	 */
	bioHTML: string;

	/**
	 * A list of commit comments made by this user.
	 */
	commitComments: CommitCommentConnection;

	/**
	 * The user's public profile company.
	 */
	company?: Nullable<string>;

	/**
	 * The user's public profile company as HTML.
	 */
	companyHTML: string;

	/**
	 * The collection of contributions this user has made to different repositories.
	 */
	contributionsCollection: ContributionsCollection;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * A list of users the given user is followed by.
	 */
	followers: FollowerConnection;

	/**
	 * A list of users the given user is following.
	 */
	following: FollowingConnection;

	/**
	 * Find gist by repo name.
	 */
	gist?: Nullable<Gist>;

	/**
	 * A list of gist comments made by this user.
	 */
	gistComments: GistCommentConnection;

	/**
	 * A list of the Gists the user has created.
	 */
	gists: GistConnection;

	/**
	 * The hovercard information for this user in a given context.
	 */
	hovercard: Hovercard;

	/**
	 * The interaction ability settings for this user.
	 */
	interactionAbility?: Nullable<RepositoryInteractionAbility>;

	/**
	 * Whether or not this user is a participant in the GitHub Security Bug Bounty.
	 */
	isBountyHunter: boolean;

	/**
	 * Whether or not this user is a participant in the GitHub Campus Experts Program.
	 */
	isCampusExpert: boolean;

	/**
	 * Whether or not this user is a GitHub Developer Program member.
	 */
	isDeveloperProgramMember: boolean;

	/**
	 * Whether or not this user is a GitHub employee.
	 */
	isEmployee: boolean;

	/**
	 * Whether or not this user is a member of the GitHub Stars Program.
	 */
	isGitHubStar: boolean;

	/**
	 * Whether or not the user has marked themselves as for hire.
	 */
	isHireable: boolean;

	/**
	 * Whether or not this user is a site administrator.
	 */
	isSiteAdmin: boolean;

	/**
	 * Whether or not this user is the viewing user.
	 */
	isViewer: boolean;

	/**
	 * A list of issue comments made by this user.
	 */
	issueComments: IssueCommentConnection;

	/**
	 * A list of issues associated with this user.
	 */
	issues: IssueConnection;

	/**
	 * Find an organization by its login that the user belongs to.
	 */
	organization?: Nullable<Organization>;

	/**
	 * Verified email addresses that match verified domains for a specified organization the user
	 * is a member of.
	 */
	organizationVerifiedDomainEmails: string[];

	/**
	 * A list of organizations the user belongs to.
	 */
	organizations: OrganizationConnection;

	/**
	 * A list of public keys associated with this user.
	 */
	publicKeys: PublicKeyConnection;

	/**
	 * A list of pull requests associated with this user.
	 */
	pullRequests: PullRequestConnection;

	/**
	 * A list of repositories that the user recently contributed to.
	 */
	repositoriesContributedTo: RepositoryConnection;

	/**
	 * Replies this user has saved.
	 */
	savedReplies?: Nullable<SavedReplyConnection>;

	/**
	 * Repositories the user has starred.
	 */
	starredRepositories: StarredRepositoryConnection;

	/**
	 * The user's description of what they're currently doing.
	 */
	status?: Nullable<UserStatus>;

	/**
	 * Repositories the user has contributed to, ordered by contribution rank, plus repositories
	 * the user has created.
	 */
	topRepositories: RepositoryConnection;

	/**
	 * The user's Twitter username.
	 */
	twitterUsername?: Nullable<string>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * Whether or not the viewer is able to follow the user.
	 */
	viewerCanFollow: boolean;

	/**
	 * Whether or not this user is followed by the viewer.
	 */
	viewerIsFollowing: boolean;

	/**
	 * A list of repositories the given user is watching.
	 */
	watching: RepositoryConnection;
}

/**
 * An edit on user content.
 */
export interface UserContentEdit extends Node, MetaField<'UserContentEdit'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the date and time when the object was deleted.
	 */
	deletedAt?: Nullable<string>;

	/**
	 * The actor who deleted this content.
	 */
	deletedBy?: Nullable<Actor>;

	/**
	 * A summary of the changes for this edit.
	 */
	diff?: Nullable<string>;

	/**
	 * When this content was edited.
	 */
	editedAt: string;

	/**
	 * The actor who edited this content.
	 */
	editor?: Nullable<Actor>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;
}

/**
 * Email attributes from External Identity.
 */
export interface UserEmailMetadata extends MetaField<'UserEmailMetadata'> {
	/**
	 * Boolean to identify primary emails.
	 */
	primary?: Nullable<boolean>;

	/**
	 * interface of email.
	 */
	interface?: Nullable<string>;

	/**
	 * Email id.
	 */
	value: string;
}

/**
 * The user's description of what they're currently doing.
 */
export interface UserStatus extends Node, MetaField<'UserStatus'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * An emoji summarizing the user's status.
	 */
	emoji?: Nullable<string>;

	/**
	 * The status emoji as HTML.
	 */
	emojiHTML?: Nullable<string>;

	/**
	 * If set, the status will not be shown after this date.
	 */
	expiresAt?: Nullable<string>;

	/**
	 * Whether this status indicates the user is not fully available on GitHub.
	 */
	indicatesLimitedAvailability: boolean;

	/**
	 * A brief message describing what the user is doing.
	 */
	message?: Nullable<string>;

	/**
	 * The organization whose members can see this status. If null, this status is publicly visible.
	 */
	organization?: Nullable<Organization>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * The user who has this status.
	 */
	user: User;
}

/**
 * A domain that can be verified for an organization or an enterprise.
 */
export interface VerifiableDomain extends Node, MetaField<'VerifiableDomain'> {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The DNS host name that should be used for verification.
	 */
	dnsHostName?: Nullable<string>;

	/**
	 * The unicode encoded domain.
	 */
	domain: string;

	/**
	 * Whether a TXT record for verification with the expected host name was found.
	 */
	hasFoundHostName: boolean;

	/**
	 * Whether a TXT record for verification with the expected verification token was found.
	 */
	hasFoundVerificationToken: boolean;

	/**
	 * Whether this domain is required to exist for an organization or enterprise policy to be
	 * enforced.
	 */
	isRequiredForPolicyEnforcement: boolean;

	/**
	 * Whether or not the domain is verified.
	 */
	isVerified: boolean;

	/**
	 * The owner of the domain.
	 */
	owner: VerifiableDomainOwner;

	/**
	 * The punycode encoded domain.
	 */
	punycodeEncodedDomain: string;

	/**
	 * The time that the current verification token will expire.
	 */
	tokenExpirationTime?: Nullable<string>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * The current verification token for the domain.
	 */
	verificationToken?: Nullable<string>;
}

/**
 * A hovercard context with a message describing how the viewer is related.
 */
export interface ViewerHovercardContext extends HovercardContext, MetaField<'ViewerHovercardContext'> {
	/**
	 * Identifies the user who is related to this context.
	 */
	viewer: User;
}
