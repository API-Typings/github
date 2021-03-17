export enum AuditLogOrderField {
	/**
	 * Order audit log entries by timestamp.
	 */
	CreatedAt = 'CREATED_AT'
}

/**
 * Represents an annotation's information level.
 */
export enum CheckAnnotationLevel {
	/**
	 * An annotation indicating an inescapable error.
	 */
	Failure = 'FAILURE',

	/**
	 * An annotation indicating some information.
	 */
	Notice = 'NOTICE',

	/**
	 * An annotation indicating an ignorable error.
	 */
	Warning = 'WARNING'
}

/**
 * The possible states for a check suite or run conclusion.
 */
export enum CheckConclusionState {
	/**
	 * The check suite or run requires action.
	 */
	ActionRequired = 'ACTION_REQUIRED',

	/**
	 * The check suite or run has been cancelled.
	 */
	Cancelled = 'CANCELLED',

	/**
	 * The check suite or run has failed.
	 */
	Failed = 'FAILED',

	/**
	 * The check suite or run was neutral.
	 */
	Neutral = 'NEUTRAL',

	/**
	 * The check suite or run was skipped.
	 */
	Skipped = 'SKIPPED',

	/**
	 * The check suite or run was marked stale by GitHub. Only GitHub can use this conclusion.
	 */
	Stale = 'STALE',

	/**
	 * The check suite or run has failed at startup.
	 */
	StartupFailure = 'STARTUP_FAILURE',

	/**
	 * The check suite or run has succeeded.
	 */
	Success = 'SUCCESS',

	/**
	 * The check suite or run has timed out.
	 */
	TimedOut = 'TIMED_OUT'
}

/**
 * The possible types of check runs.
 */
export enum CheckRunType {
	/**
	 * Every check run available.
	 */
	All = 'ALL',

	/**
	 * The latest check run.
	 */
	Latest = 'LATEST'
}

/**
 * The possible states for a check suite or run status.
 */
export enum CheckStatusState {
	/**
	 * The check suite or run has been completed.
	 */
	Completed = 'COMPLETED',

	/**
	 * The check suite or run is in progress.
	 */
	InProgress = 'IN_PROGRESS',

	/**
	 * The check suite or run has been queued.
	 */
	Queued = 'QUEUED',

	/**
	 * The check suite or run has been requested.
	 */
	Requested = 'REQUESTED',

	/**
	 * The check suite or run is in waiting state.
	 */
	Waiting = 'WAITING'
}

/**
 * Collaborators affiliation level with a subject.
 */
export enum CollaboratorAffiliation {
	/**
	 * All collaborators the authenticated user can see.
	 */
	All = 'ALL',

	/**
	 * All collaborators with permissions to an organization-owned subject, regardless of
	 * organization membership status.
	 */

	Direct = 'DIRECT',

	/**
	 * All outside collaborators of an organization-owned subject.
	 */
	Outside = 'OUTSIDE'
}

/**
 * A comment author association with repository.
 */
export enum CommentAuthorAssociation {
	/**
	 * Author has been invited to collaborate on the repository.
	 */
	Collaborator = 'COLLABORATOR',

	/**
	 * Author has previously committed to the repository.
	 */
	Contributor = 'CONTRIBUTOR',

	/**
	 * Author has not previously committed to GitHub.
	 */
	FirstTimer = 'FIRST_TIMER',

	/**
	 * Author has not previously committed to the repository.
	 */
	FirstTimeContributor = 'FIRST_TIME_CONTRIBUTOR',

	/**
	 * Author is a placeholder for an unclaimed user.
	 */
	Mannequin = 'MANNEQUIN',

	/**
	 * Author is a member of the organization that owns the repository.
	 */
	Member = 'MEMBER',

	/**
	 * Author has no association with the repository.
	 */
	None = 'NONE',

	/**
	 * Author is the owner of the repository.
	 */
	Owner = 'OWNER'
}

/**
 * The possible errors that will prevent a user from updating a comment.
 */
export enum CommentCannotUpdateReason {
	/**
	 * Unable to create comment because repository is archived.
	 */
	Archived = 'ARCHIVED',

	/**
	 * You cannot update this comment.
	 */
	Denied = 'DENIED',

	/**
	 * You must be the author or have write access to this repository to update this comment.
	 */
	InsufficientAccess = 'INSUFFICIENT_ACCESS',

	/**
	 * Unable to create comment because issue is locked.
	 */
	Locked = 'LOCKED',

	/**
	 * You must be logged in to update this comment.
	 */
	LoginRequired = 'LOGIN_REQUIRED',

	/**
	 * Repository is under maintenance.
	 */
	Maintenance = 'MAINTENANCE',

	/**
	 * At least one email address must be verified to update this comment.
	 */
	VerifiedEmailRequired = 'VERIFIED_EMAIL_REQUIRED'
}

export enum CommitContributionOrderField {
	/**
	 * Order commit contributions by how many commits they represent.
	 */
	CommitCount = 'COMMIT_COUNT',

	/**
	 * Order commit contributions by when they were made.
	 */
	OccurredAt = 'OCCURRED_AT'
}

/**
 * Varying levels of contributions from none to many.
 */
export enum ContributionLevel {
	/**
	 * Lowest 25% of days of contributions.
	 */
	FirstQuartile = 'FIRST_QUARTILE',

	/**
	 * Highest 25% of days of contributions. More contributions than the third quartile.
	 */
	FourthQuartile = 'FOURTH_QUARTILE',

	/**
	 * No contributions occurred.
	 */
	None = 'NONE',

	/**
	 * Second lowest 25% of days of contributions. More contributions than the first quartile.
	 */
	SecondQuartile = 'SECOND_QUARTILE',

	/**
	 * Second highest 25% of days of contributions. More contributions than second quartile, less
	 * than the fourth quartile.
	 */
	ThirdQuartile = 'THIRD_QUARTILE'
}

/**
 * The possible default permissions for repositories.
 */
export enum DefaultRepositoryPermissionField {
	/**
	 * Can read, write, and administrate repos by default.
	 */
	Admin = 'ADMIN',

	/**
	 * No access.
	 */
	None = 'NONE',

	/**
	 * Can read repos by default.
	 */
	Read = 'READ',

	/**
	 * Can read and write repos by default.
	 */
	Write = 'WRITE'
}

export enum DeploymentOrderField {
	/**
	 * Order collection by creation time.
	 */
	CreatedAt = 'CREATED_AT'
}

/**
 * The possible states in which a deployment can be.
 */
export enum DeploymentState {
	/**
	 * The pending deployment was not updated after 30 minutes.
	 */
	Abandoned = 'ABANDONED',

	/**
	 * The deployment is currently active.
	 */
	Active = 'ACTIVE',

	/**
	 * An inactive transient deployment.
	 */
	Destroyed = 'DESTROYED',

	/**
	 * The deployment experienced an error.
	 */
	Error = 'ERROR',

	/**
	 * The deployment has failed.
	 */
	Failure = 'FAILURE',

	/**
	 * The deployment is inactive.
	 */
	Inactive = 'INACTIVE',

	/**
	 * The deployment is in progress.
	 */
	InProgress = 'IN_PROGRESS',

	/**
	 * The deployment is pending.
	 */
	Pending = 'PENDING',

	/**
	 * The deployment has queued.
	 */
	Queued = 'QUEUED',

	/**
	 * The deployment is waiting.
	 */
	Waiting = 'WAITING'
}

/**
 * The possible states for a deployment status.
 */
export enum DeploymentStatusState {
	/**
	 * The deployment experienced an error.
	 */
	Error = 'ERROR',

	/**
	 * The deployment has failed.
	 */
	Failure = 'FAILURE',

	/**
	 * The deployment is inactive.
	 */
	Inactive = 'INACTIVE',

	/**
	 * The deployment is in progress.
	 */
	InProgress = 'IN_PROGRESS',

	/**
	 * The deployment is pending.
	 */
	Pending = 'PENDING',

	/**
	 * The deployment is queued.
	 */
	Queued = 'QUEUED',

	/**
	 * The deployment was successful.
	 */
	Success = 'SUCCESS',

	/**
	 * The deployment is waiting.
	 */
	Waiting = 'WAITING'
}

/**
 * The possible sides of a diff.
 */
export enum DiffSide {
	/**
	 * The left side of the diff.
	 */
	Left = 'LEFT',

	/**
	 * The right side of the diff.
	 */
	Right = 'RIGHT'
}

export enum EnterpriseAdministratorInvitationOrderField {
	/**
	 * Order enterprise administrator member invitations by creation time.
	 */
	CreatedAt = 'CREATED_AT'
}

/**
 * The possible administrator roles in an enterprise account.
 */
export enum EnterpriseAdministratorRole {
	/**
	 * Represents a billing manager of the enterprise account.
	 */
	BillingManager = 'BILLING_MANAGER',

	/**
	 * Represents an owner of the enterprise account.
	 */
	Owner = 'OWNER'
}

/**
 * The possible values for the enterprise default repository permission setting.
 */
export enum EnterpriseDefaultRepositoryPermissionSettingValue {
	/**
	 * Organization members will be able to clone, pull, push, and add new collaborators to all
	 * organization repositories.
	 */
	Admin = 'ADMIN',

	/**
	 * Organization members will only be able to clone and pull public repositories.
	 */
	None = 'NONE',

	/**
	 * Organizations in the enterprise choose default repository permissions for their members.
	 */
	NoPolicy = 'NO_POLICY',

	/**
	 * Organization members will be able to clone and pull all organization repositories.
	 */
	Read = 'READ',

	/**
	 * Organization members will be able to clone, pull, and push all organization repositories.
	 */
	Write = 'WRITE'
}

/**
 * The possible values for an enabled/disabled enterprise setting.
 */
export enum EnterpriseEnabledDisabledSettingValue {
	/**
	 * The setting is disabled for organizations in the enterprise.
	 */
	Disabled = 'DISABLED',

	/**
	 * The setting is enabled for organizations in the enterprise.
	 */
	Enabled = 'ENABLED',

	/**
	 * There is no policy set for organizations in the enterprise.
	 */
	NoPolicy = 'NO_POLICY'
}

/**
 * The possible values for an enabled/no policy enterprise setting.
 */
export enum EnterpriseEnabledSettingValue {
	/**
	 * The setting is enabled for organizations in the enterprise.
	 */
	Enabled = 'ENABLED',

	/**
	 * There is no policy set for organizations in the enterprise.
	 */
	NoPolicy = 'NO_POLICY'
}

export enum EnterpriseMemberOrderField {
	/**
	 * Order enterprise members by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order enterprise members by login.
	 */
	Login = 'LOGIN'
}

/**
 * The possible values for the enterprise members can create repositories setting.
 */
export enum EnterpriseMembersCanCreateRepositoriesSettingValue {
	/**
	 * Members will be able to create public and private repositories.
	 */
	All = 'ALL',

	/**
	 * Members will not be able to create public or private repositories.
	 */
	Disabled = 'DISABLED',

	/**
	 * Organization administrators choose whether to allow members to create repositories.
	 */
	NoPolicy = 'NO_POLICY',

	/**
	 * Members will be able to create only private repositories.
	 */
	Private = 'PRIVATE',

	/**
	 * Members will be able to create only public repositories.
	 */
	Public = 'PUBLIC'
}

/**
 * The possible values for the members can make purchases setting.
 */
export enum EnterpriseMembersCanMakePurchasesSettingValue {
	/**
	 * The setting is disabled for organizations in the enterprise.
	 */
	Disabled = 'DISABLED',

	/**
	 * The setting is enabled for organizations in the enterprise.
	 */
	Enabled = 'ENABLED'
}

export enum EnterpriseServerInstallationOrderField {
	/**
	 * Order Enterprise Server installations by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order Enterprise Server installations by customer name.
	 */
	CustomerName = 'CUSTOMER_NAME',

	/**
	 * Order Enterprise Server installations by host name.
	 */
	HostName = 'HOST_NAME'
}

export enum EnterpriseServerUserAccountEmailOrderField {
	/**
	 * Order emails by email.
	 */
	Email = 'EMAIL'
}

export enum EnterpriseServerUserAccountOrderField {
	/**
	 * Order user accounts by login.
	 */
	Login = 'LOGIN',

	/**
	 * Order user accounts by creation time on the Enterprise Server installation.
	 */
	RemoteCreatedAt = 'REMOTE_CREATED_AT'
}

export enum EnterpriseServerUserAccountsUploadOrderField {
	/**
	 * Order user accounts uploads by creation time.
	 */
	CreatedAt = 'CREATED_AT'
}

/**
 * Synchronization state of the Enterprise Server user accounts upload.
 */
export enum EnterpriseServerUserAccountsUploadSyncState {
	/**
	 * The synchronization of the upload failed.
	 */
	Failure = 'FAILURE',

	/**
	 * The synchronization of the upload is pending.
	 */
	Pending = 'PENDING',

	/**
	 * The synchronization of the upload succeeded.
	 */
	Success = 'SUCCESS'
}

/**
 * The possible roles for enterprise membership.
 */
export enum EnterpriseUserAccountMembershipRole {
	/**
	 * The user is a member of the enterprise membership.
	 */
	Member = 'MEMBER',

	/**
	 * The user is an owner of the enterprise membership.
	 */
	Owner = 'OWNER'
}

/**
 * The possible GitHub Enterprise deployments where this user can exist.
 */
export enum EnterpriseUserDeployment {
	/**
	 * The user is part of a GitHub Enterprise Cloud deployment.
	 */
	Cloud = 'CLOUD',

	/**
	 * The user is part of a GitHub Enterprise Server deployment.
	 */
	Server = 'SERVER'
}

/**
 * The possible viewed states of a file.
 */
export enum FileViewedState {
	/**
	 * The file has new changes since last viewed.
	 */
	Dismissed = 'DISMISSED',

	/**
	 * The file has not been marked as viewed.
	 */
	Unviewed = 'UNVIEWED',

	/**
	 * The file has been marked as viewed.
	 */
	Viewed = 'VIEWED'
}

/**
 * The possible funding platforms for repository funding links.
 */
export enum FundingPlatform {
	/**
	 * Community Bridge funding platform.
	 */
	CommunityBridge = 'COMMUNITY_BRIDGE',

	/**
	 * Custom funding platform.
	 */
	Custom = 'CUSTOM',

	/**
	 * GitHub funding platform.
	 */
	GitHub = 'GITHUB',

	/**
	 * IssueHunt funding platform.
	 */
	IssueHunt = 'ISSUEHUNT',

	/**
	 * Ko-fi funding platform.
	 */
	KoFi = 'KO_FI',

	/**
	 * Liberapay funding platform.
	 */
	Liberapay = 'LIBERAPAY',

	/**
	 * Open Collective funding platform.
	 */
	OpenCollective = 'OPEN_COLLECTIVE',

	/**
	 * Otechie funding platform.
	 */
	Otechie = 'OTECHIE',

	/**
	 * Patreon funding platform.
	 */
	Patreon = 'PATREON',

	/**
	 * Tidelift funding platform.
	 */
	Tidelife = 'TIDELIFT'
}

export enum GistOrderField {
	/**
	 * Order gists by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order gists by push time.
	 */
	PushedAt = 'PUSHED_AT',

	/**
	 * Order gists by update time.
	 */
	UpdatedAt = 'UPDATED_AT'
}

/**
 * The privacy of a Gist.
 */
export enum GistPrivacy {
	/**
	 * Gists that are public and secret.
	 */
	All = 'ALL',

	/**
	 * Public.
	 */
	Public = 'PUBLIC',

	/**
	 * Secret.
	 */
	Secret = 'SECRET'
}

/**
 * The state of a Git signature.
 */
export enum GitSignatureState {
	/**
	 * The signing certificate or its chain could not be verified.
	 */
	BadCertificate = 'BAD_CERT',

	/**
	 * Invalid email used for signing.
	 */
	BadEmail = 'BAD_EMAIL',

	/**
	 * Signing key expired.
	 */
	ExpiredKey = 'EXPIRED_KEY',

	/**
	 * Internal error - the GPG verification service misbehaved.
	 */
	GPGVerifyError = 'GPGVERIFY_ERROR',

	/**
	 * Internal error - the GPG verification service is unavailable at the moment.
	 */
	GPGVerifyUnavailable = 'GPGVERIFY_UNAVAILABLE',

	/**
	 * Invalid signature.
	 */
	Invalid = 'INVALID',

	/**
	 * Malformed signature.
	 */
	MalformedSignature = 'MALFORMED_SIG',

	/**
	 * The usage flags for the key that signed this don't allow signing.
	 */
	DisallowedSigning = 'NOT_SIGNING_KEY',

	/**
	 * Email used for signing not known to GitHub.
	 */
	NoUser = 'NO_USER',

	/**
	 * Valid signature, though certificate revocation check failed.
	 */
	OCSPError = 'OCSP_ERROR',

	/**
	 * Valid signature, pending certificate revocation checking.
	 */
	OCSPPending = 'OCSP_PENDING',

	/**
	 * One or more certificates in chain has been revoked.
	 */
	OCSPRevoked = 'OCSP_REVOKED',

	/**
	 * Key used for signing not known to GitHub.
	 */
	UnknownKey = 'UNKNOWN_KEY',

	/**
	 * Unknown signature type.
	 */
	UnknownSignature = 'UNKNOWN_SIG_TYPE',

	/**
	 * Unsigned.
	 */
	Unsigned = 'UNSIGNED',

	/**
	 * Email used for signing unverified on GitHub.
	 */
	UnverifiedEmail = 'UNVERIFIED_EMAIL',

	/**
	 * Valid signature and verified by GitHub.
	 */
	Valid = 'VALID'
}

/**
 * The possible states in which authentication can be configured with an identity provider.
 */
export enum IdentityProviderConfigurationState {
	/**
	 * Authentication with an identity provider is configured but not enforced.
	 */
	Configured = 'CONFIGURED',

	/**
	 * Authentication with an identity provider is configured and enforced.
	 */
	Enforced = 'ENFORCED',

	/**
	 * Authentication with an identity provider is not configured.
	 */
	Unconfigured = 'UNCONFIGURED'
}

/**
 * The possible values for the IP allow list enabled setting.
 */
export enum IpAllowListEnabledSettingValue {
	/**
	 * The setting is disabled for the owner.
	 */
	Disabled = 'DISABLED',

	/**
	 * The setting is enabled for the owner.
	 */
	Enabled = 'ENABLED'
}

export enum IpAllowListEntryOrderField {
	/**
	 * Order IP allow list entries by the allow list value.
	 */
	AllowListValue = 'ALLOW_LIST_VALUE',

	/**
	 * Order IP allow list entries by creation time.
	 */
	CreatedAt = 'CREATED_AT'
}

export enum IssueCommentOrderField {
	/**
	 * Order issue comments by update time.
	 */
	UpdatedAt = 'UPDATED_AT'
}

export enum IssueOrderField {
	/**
	 * Order issues by comment count.
	 */
	Comments = 'COMMENTS',

	/**
	 * Order issues by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order issues by update time.
	 */
	UpdatedAt = 'UPDATED_AT'
}

/**
 * The possible states of an issue.
 */
export enum IssueState {
	/**
	 * An issue that has been closed.
	 */
	Closed = 'CLOSED',

	/**
	 * An issue that is still open.
	 */
	Open = 'OPEN'
}

/**
 * The possible item types found in a timeline.
 */
export enum IssueTimelineItemsItemType {
	/**
	 * Represents a `added_to_project` event on a given issue or pull request.
	 */
	AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',

	/**
	 * Represents a `assigned` event on any assignable object.
	 */
	Assigned = 'ASSIGNED_EVENT',

	/**
	 * Represents a `closed` event on any `Closable`.
	 */
	ClosedEvent = 'CLOSED_EVENT',

	/**
	 * Represents a `comment_deleted` event on a given issue or pull request.
	 */
	CommentDeletedEvent = 'COMMENT_DELETED_EVENT',

	/**
	 * Represents a `connected` event on a given issue or pull request.
	 */
	ConnectedEvent = 'CONNECTED_EVENT',

	/**
	 * Represents a `converted_note_to_issue` event on a given issue or pull request.
	 */
	ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',

	/**
	 * Represents a mention made by one issue or pull request to another.
	 */
	CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',

	/**
	 * Represents a `demilestoned` event on a given issue or pull request.
	 */
	DemilestonedEvent = 'DEMILESTONED_EVENT',

	/**
	 * Represents a `disconnected` event on a given issue or pull request.
	 */
	DisconnectedEvent = 'DISCONNECTED_EVENT',

	/**
	 * Represents a comment on an Issue.
	 */
	IssueComment = 'ISSUE_COMMENT',

	/**
	 * Represents a `labeled` event on a given issue or pull request.
	 */
	LabeledEvent = 'LABELED_EVENT',

	/**
	 * Represents a `locked` event on a given issue or pull request.
	 */
	LockedEvent = 'LOCKED_EVENT',

	/**
	 * Represents a `marked_as_duplicate` event on a given issue or pull request.
	 */
	MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',

	/**
	 * Represents a `mentioned` event on a given issue or pull request.
	 */
	MentionedEvent = 'MENTIONED_EVENT',

	/**
	 * Represents a `milestoned` event on a given issue or pull request.
	 */
	MilestonedEvent = 'MILESTONED_EVENT',

	/**
	 * Represents a `moved_columns_in_project` event on a given issue or pull request.
	 */
	MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',

	/**
	 * Represents a `pinned` event on a given issue or pull request.
	 */
	PinnedEvent = 'PINNED_EVENT',

	/**
	 * Represents a `referenced` event on a given `ReferencedSubject`.
	 */
	ReferencedEvent = 'REFERENCED_EVENT',

	/**
	 * Represents a `removed_from_project` event on a given issue or pull request.
	 */
	RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',

	/**
	 * Represents a `renamed` event on a given issue or pull request.
	 */
	RenamedTitleEvent = 'RENAMED_TITLE_EVENT',

	/**
	 * Represents a `reopened` event on any `Closable`.
	 */
	ReopenedEvent = 'REOPENED_EVENT',

	/**
	 * Represents a `subscribed` event on a given `Subscribable`.
	 */
	SubscribedEvent = 'SUBSCRIBED_EVENT',

	/**
	 * Represents a `transferred` event on a given issue or pull request.
	 */
	TransferredEvent = 'TRANSFERRED_EVENT',

	/**
	 * Represents a `unassigned` event on any assignable object.
	 */
	UnassignedEvent = 'UNASSIGNED_EVENT',

	/**
	 * Represents a `unlabeled` event on a given issue or pull request.
	 */
	UnlabeledEvent = 'UNLABELED_EVENT',

	/**
	 * Represents a `unlocked` event on a given issue or pull request.
	 */
	UnlockedEvent = 'UNLOCKED_EVENT',

	/**
	 * Represents a `unmarked_as_duplicate` event on a given issue or pull request.
	 */
	UnmarkedAsDuplicateEvent = 'UNMARKED_AS_DUPLICATE_EVENT',

	/**
	 * Represents a `unpinned` event on a given issue or pull request.
	 */
	UnpinnedEvent = 'UNPINNED_EVENT',

	/**
	 * Represents a `unsubscribed` event on a given `Subscribable`.
	 */
	UnsubscribedEvent = 'UNSUBSCRIBED_EVENT',

	/**
	 * Represents a `user_blocked` event on a given user.
	 */
	UserBlockedEvent = 'USER_BLOCKED_EVENT'
}

export enum LabelOrderField {
	/**
	 * Order labels by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order labels by name .
	 */
	Name = 'NAME'
}

export enum LanguageOrderField {
	/**
	 * Order languages by the size of all files containing the language.
	 */
	Size = 'SIZE'
}

/**
 * The possible reasons that an issue or pull request was locked.
 */
export enum LockReason {
	/**
	 * The issue or pull request was locked because the conversation was off-topic.
	 */
	OffTopic = 'OFF_TOPIC',

	/**
	 * The issue or pull request was locked because the conversation was resolved.
	 */
	Resolved = 'RESOLVED',

	/**
	 * The issue or pull request was locked because the conversation was spam.
	 */
	Spam = 'SPAM',

	/**
	 * The issue or pull request was locked because the conversation was too heated.
	 */
	TooHeated = 'TOO_HEATED'
}

/**
 * Whether or not a PullRequest can be merged.
 */
export enum MergeableState {
	/**
	 * The pull request cannot be merged due to merge conflicts.
	 */
	Conflicting = 'CONFLICTING',

	/**
	 * The pull request can be merged.
	 */
	Mergeable = 'MERGEABLE',

	/**
	 * The mergeability of the pull request is still being calculated.
	 */
	Unknown = 'UNKNOWN'
}

export enum MilestoneOrderField {
	/**
	 * Order milestones by when they were created.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order milestones by when they are due.
	 */
	DueDate = 'DUE_DATE',

	/**
	 * Order milestones by their number.
	 */
	Number = 'NUMBER',

	/**
	 * Order milestones by when they were last updated.
	 */
	UpdatedAt = 'UPDATED_AT'
}

/**
 * The possible states of a milestone.
 */
export enum MilestoneState {
	/**
	 * A milestone that has been closed.
	 */
	Closed = 'CLOSED',

	/**
	 * A milestone that is still open.
	 */
	Open = 'OPEN'
}

/**
 * The possible values for the notification restriction setting.
 */
export enum NotificationRestrictionSettingValue {
	/**
	 * The setting is disabled for the owner.
	 */
	Disabled = 'DISABLED',

	/**
	 * The setting is enabled for the owner.
	 */
	Enabled = 'ENABLED'
}

/**
 * The state of an OAuth Application when it was created.
 */
export enum OauthApplicationCreateAuditEntryState {
	/**
	 * The OAuth Application was active and allowed to have OAuth Accesses.
	 */
	Active = 'ACTIVE',

	/**
	 * The OAuth Application was in the process of being deleted.
	 */
	PendingDeletion = 'PENDING_DELETION',

	/**
	 * The OAuth Application was suspended from generating OAuth Accesses due to abuse or security
	 * concerns.
	 */
	Suspended = 'SUSPENDED'
}

/**
 * The corresponding operation type for the action.
 */
export enum OperationType {
	/**
	 * An existing resource was accessed.
	 */
	Acces = 'ACCESS',

	/**
	 * A resource performed an authentication event.
	 */
	Authentication = 'AUTHENTICATION',

	/**
	 * A new resource was created.
	 */
	Create = 'CREATE',

	/**
	 * An existing resource was modified.
	 */
	Modify = 'MODIFY',

	/**
	 * An existing resource was removed.
	 */
	Remove = 'REMOVE',

	/**
	 * An existing resource was restored.
	 */
	Restore = 'RESTORE',

	/**
	 * An existing resource was transferred between multiple resources.
	 */
	Transfer = 'TRANSFER'
}

/**
 * Possible directions in which to order a list of items when provided an `orderBy` argument.
 */
export enum OrderDirection {
	/**
	 * Specifies an ascending order for a given `orderBy` argument.
	 */
	Ascending = 'ASC',

	/**
	 * Specifies a descending order for a given `orderBy` argument.
	 */
	Descending = 'DESC'
}

/**
 * The permissions available to members on an Organization.
 */
export enum OrgAddMemberAuditEntryPermission {
	/**
	 * Can read, clone, push, and add collaborators to repositories.
	 */
	Admin = 'ADMIN',

	/**
	 * Can read and clone repositories.
	 */
	Read = 'READ'
}

/**
 * The billing plans available for organizations.
 */
export enum OrgCreateAuditEntryBillingPlan {
	/**
	 * Team Plan.
	 */
	Business = 'BUSINESS',

	/**
	 * Enterprise Cloud Plan.
	 */
	BusinessPlus = 'BUSINESS_PLUS',

	/**
	 * Free Plan.
	 */
	Free = 'FREE',

	/**
	 * Tiered Per Seat Plan.
	 */
	TieredPerSeat = 'TIERED_PER_SEAT',

	/**
	 * Legacy Unlimited Plan.
	 */
	Unlimited = 'UNLIMITED'
}

/**
 * The reason a billing manager was removed from an Organization.
 */
export enum OrgRemoveBillingManagerAuditEntryReason {
	/**
	 * SAML external identity missing.
	 */
	ExternalIdentiyMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',

	/**
	 * SAML SSO enforcement requires an external identity.
	 */
	ExternalIdentityRequired = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',

	/**
	 * The organization required 2FA of its billing managers and this user did not have 2FA enabled.
	 */
	TwoFactorDisabled = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
}

/**
 * The type of membership a user has with an Organization.
 */
export enum OrgRemoveMemberAuditEntryMembershipType {
	/**
	 * Organization administrators have full access and can change several settings,
	 * including the names of repositories that belong to the Organization and Owners
	 * team membership. In addition, organization admins can delete the organization
	 * and all of its repositories.
	 */
	Admin = 'ADMIN',

	/**
	 * A billing manager is a user who manages the billing settings for the Organization, such as
	 * updating payment information.
	 */
	BillingManager = 'BILLING_MANAGER',

	/**
	 * A direct member is a user that is a member of the Organization.
	 */
	DirectMember = 'DIRECT_MEMBER',

	/**
	 * An outside collaborator is a person who isn't explicitly a member of the
	 * Organization, but who has Read, Write, or Admin permissions to one or more
	 * repositories in the organization.
	 */
	OutsideCollaborator = 'OUTSIDE_COLLABORATOR',

	/**
	 * An unaffiliated collaborator is a person who is not a member of the
	 * Organization and does not have access to any repositories in the Organization.
	 */
	Unaffiliated = 'UNAFFILIATED'
}

/**
 * The reason a member was removed from an Organization.
 */
export enum OrgRemoveMemberAuditEntryReason {
	/**
	 * SAML external identity missing.
	 */
	ExternalIdentiyMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',

	/**
	 * SAML SSO enforcement requires an external identity.
	 */
	ExternalIdentityRequired = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',

	/**
	 * User was removed from organization during account recovery.
	 */
	AccountRecovery = 'TWO_FACTOR_ACCOUNT_RECOVERY',

	/**
	 * The organization required 2FA of its billing managers and this user did not have 2FA enabled.
	 */
	TwoFactorDisabled = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',

	/**
	 * User account has been deleted.
	 */
	AccountDeleted = 'USER_ACCOUNT_DELETED'
}

/**
 * The type of membership a user has with an Organization.
 */
export enum OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
	/**
	 * A billing manager is a user who manages the billing settings for the Organization, such as
	 * updating payment information.
	 */
	BillingManager = 'BILLING_MANAGER',

	/**
	 * An outside collaborator is a person who isn't explicitly a member of the
	 * Organization, but who has Read, Write, or Admin permissions to one or more
	 * repositories in the organization.
	 */
	OutsideCollaborator = 'OUTSIDE_COLLABORATOR',

	/**
	 * An unaffiliated collaborator is a person who is not a member of the
	 * Organization and does not have access to any repositories in the organization.
	 */
	Unaffiliated = 'UNAFFILIATED'
}

/**
 * The reason an outside collaborator was removed from an Organization.
 */
export enum OrgRemoveOutsideCollaboratorAuditEntryReason {
	/**
	 * SAML external identity missing.
	 */
	ExternalIdentiyMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',

	/**
	 * The organization required 2FA of its billing managers and this user did not have 2FA enabled.
	 */
	TwoFactorDisabled = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
}

/**
 * The default permission a repository can have in an Organization.
 */
export enum OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
	/**
	 * Can read, clone, push, and add collaborators to repositories.
	 */
	Admin = 'ADMIN',

	/**
	 * No default permission value.
	 */
	None = 'NONE',

	/**
	 * Can read and clone repositories.
	 */
	Read = 'READ',

	/**
	 * Can read, clone and push to repositories.
	 */
	Write = 'WRITE'
}

/**
 * The permissions available to members on an Organization.
 */
export enum OrgUpdateMemberAuditEntryPermission {
	/**
	 * Can read, clone, push, and add collaborators to repositories.
	 */
	Admin = 'ADMIN',

	/**
	 * Can read and clone repositories.
	 */
	Read = 'READ'
}

/**
 * The permissions available for repository creation on an Organization.
 */
export enum OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
	/**
	 * All organization members are restricted from creating any repositories.
	 */
	All = 'ALL',

	/**
	 * All organization members are restricted from creating internal repositories.
	 */
	Internal = 'INTERNAL',

	/**
	 * All organization members are allowed to create any repositories.
	 */
	None = 'NONE',

	/**
	 * All organization members are restricted from creating private repositories.
	 */
	Private = 'PRIVATE',

	/**
	 * All organization members are restricted from creating private or internal repositories.
	 */
	PrivateInternal = 'PRIVATE_INTERNAL',

	/**
	 * All organization members are restricted from creating public repositories.
	 */
	Public = 'PUBLIC',

	/**
	 * All organization members are restricted from creating public or internal repositories.
	 */
	PublicInternal = 'PUBLIC_INTERNAL',

	/**
	 * All organization members are restricted from creating public or private repositories.
	 */
	PublicPrivate = 'PUBLIC_PRIVATE'
}

/**
 * The possible organization invitation roles.
 */
export enum OrganizationInvitationRole {
	/**
	 * The user is invited to be an admin of the organization.
	 */
	Admin = 'ADMIN',

	/**
	 * The user is invited to be a billing manager of the organization.
	 */
	BillingManager = 'BILLING_MANAGER',

	/**
	 * The user is invited to be a direct member of the organization.
	 */
	DirectMember = 'DIRECT_MEMBER',

	/**
	 * The user's previous role will be reinstated.
	 */
	Reinstate = 'REINSTATE'
}

/**
 * The possible organization invitation types.
 */
export enum OrganizationInvitationType {
	/**
	 * The invitation was to an email address.
	 */
	Email = 'EMAIL',

	/**
	 * The invitation was to an existing user.
	 */
	User = 'USER'
}

/**
 * The possible roles within an organization for its members.
 */
export enum OrganizationMemberRole {
	/**
	 * The user is an administrator of the organization.
	 */
	Admin = 'ADMIN',

	/**
	 * The user is a member of the organization.
	 */
	Member = 'MEMBER'
}

/**
 * The possible values for the members can create repositories setting on an organization.
 */
export enum OrganizationMembersCanCreateRepositoriesSettingValue {
	/**
	 * Members will be able to create public and private repositories.
	 */
	All = 'ALL',

	/**
	 * Members will not be able to create public or private repositories.
	 */
	Disabled = 'DISABLED',

	/**
	 * Members will be able to create only private repositories.
	 */
	Private = 'PRIVATE'
}

export enum OrganizationOrderField {
	/**
	 * Order organizations by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order organizations by login.
	 */
	Login = 'LOGIN'
}

export enum PackageFileOrderField {
	/**
	 * Order package files by creation time.
	 */
	CreatedAt = 'CREATED_AT'
}

export enum PackageOrderField {
	/**
	 * Order packages by creation time.
	 */
	CreatedAt = 'CREATED_AT'
}

/**
 * The possible types of a package.
 */
export enum PackageType {
	/**
	 * A debian package.
	 */
	Debian = 'DEBIAN',

	/**
	 * A docker image.
	 */
	Docker = 'DOCKER',

	/**
	 * A maven package.
	 */
	Maven = 'MAVEN',

	/**
	 * An npm package.
	 */
	NPM = 'NPM',

	/**
	 * A nuget package.
	 */
	Nuget = 'NUGET',

	/**
	 * A python package.
	 */
	PyPi = 'PYPI',

	/**
	 * A rubygems package.
	 */
	RubyGems = 'RUBYGEMS'
}

export enum PackageVersionOrderField {
	/**
	 * Order package versions by creation time.
	 */
	CreatedAt = 'CREATED_AT'
}

/**
 * Represents items that can be pinned to a profile page or dashboard.
 */
export enum PinnableItemType {
	/**
	 * A gist.
	 */
	Gist = 'GIST',

	/**
	 * An issue.
	 */
	Issue = 'ISSUE',

	/**
	 * An organization.
	 */
	Organization = 'ORGANIZATION',

	/**
	 * A project.
	 */
	Project = 'PROJECT',

	/**
	 * A pull request.
	 */
	PullRequest = 'PULL_REQUEST',

	/**
	 * A repository.
	 */
	Repository = 'REPOSITORY',

	/**
	 * A team.
	 */
	Team = 'TEAM',

	/**
	 * A user.
	 */
	User = 'USER'
}

/**
 * The possible archived states of a project card.
 */
export enum ProjectCardArchivedState {
	/**
	 * A project card that is archived.
	 */
	Archived = 'ARCHIVED',

	/**
	 * A project card that is not archived.
	 */
	NotArchived = 'NOT_ARCHIVED'
}

/**
 * Various content states of a ProjectCard.
 */
export enum ProjectCardState {
	/**
	 * The card has content only.
	 */
	ContentOnly = 'CONTENT_ONLY',

	/**
	 * The card has a note only.
	 */
	NoteOnly = 'NOTE_ONLY',

	/**
	 * The card is redacted.
	 */
	Redacted = 'REDACTED'
}

/**
 * The semantic purpose of the column.
 */
export enum ProjectColumnPurpose {
	/**
	 * The column contains cards which are complete.
	 */
	Done = 'DONE',

	/**
	 * The column contains cards which are currently being worked on.
	 */
	InProgress = 'IN_PROGRESS',

	/**
	 * The column contains cards still to be worked on.
	 */
	Todo = 'TODO'
}

export enum ProjectOrderField {
	/**
	 * Order projects by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order projects by name.
	 */
	Name = 'NAME',

	/**
	 * Order projects by update time.
	 */
	UpdatedAt = 'UPDATED_AT'
}

/**
 * State of the project.
 */
export enum ProjectState {
	/**
	 * The project is closed.
	 */
	Closed = 'CLOSED',

	/**
	 * The project is open.
	 */
	Open = 'OPEN'
}

/**
 * GitHub-provided templates for Projects.
 */
export enum ProjectTemplate {
	/**
	 * Create a board with v2 triggers to automatically move cards across To do, In progress and
	 * Done columns.
	 */
	AutomatedKanbanV2 = 'AUTOMATED_KANBAN_V2',

	/**
	 * Create a board with triggers to automatically move cards across columns with review
	 * automation.
	 */
	AutomatedReviewsKanban = 'AUTOMATED_REVIEWS_KANBAN',

	/**
	 * Create a board with columns for To do, In progress and Done.
	 */
	BasicKanban = 'BASIC_KANBAN',

	/**
	 * Create a board to triage and prioritize bugs with To do, priority, and Done columns.
	 */
	BugTriage = 'BUG_TRIAGE'
}

/**
 * Represents available interfaces of methods to use when merging a pull request.
 */
export enum PullRequestMergeMethod {
	/**
	 * Add all commits from the head branch to the base branch with a merge commit.
	 */
	Merge = 'MERGE',

	/**
	 * Add all commits from the head branch onto the base branch individually.
	 */
	Rebase = 'REBASE',

	/**
	 * Combine all commits from the head branch into a single commit in the base branch.
	 */
	Squash = 'SQUASH'
}

export enum PullRequestOrderField {
	/**
	 * Order `pull_requests` by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order `pull_requests` by update time.
	 */
	UpdatedAt = 'UPDATED_AT'
}

/**
 * The possible states of a pull request review comment.
 */
export enum PullRequestReviewCommentState {
	/**
	 * A comment that is part of a pending review.
	 */
	Pending = 'PENDING',

	/**
	 * A comment that is part of a submitted review.
	 */
	Submitted = 'SUBMITTED'
}

/**
 * The review status of a pull request.
 */
export enum PullRequestReviewDecision {
	/**
	 * The pull request has received an approving review.
	 */
	Approved = 'APPROVED',

	/**
	 * Changes have been requested on the pull request.
	 */
	ChangesRequested = 'CHANGES_REQUESTED',

	/**
	 * A review is required before the pull request can be merged.
	 */
	ReviewRequired = 'REVIEW_REQUIRED'
}

/**
 * The possible events to perform on a pull request review.
 */
export enum PullRequestReviewEvent {
	/**
	 * Submit feedback and approve merging these changes.
	 */
	Approve = 'APPROVE',

	/**
	 * Submit general feedback without explicit approval.
	 */
	Comment = 'COMMENT',

	/**
	 * Dismiss review so it now longer effects merging.
	 */
	Dismiss = 'DISMISS',

	/**
	 * Submit feedback that must be addressed before merging.
	 */
	RequestChanges = 'REQUEST_CHANGES'
}

/**
 * The possible states of a pull request review.
 */
export enum PullRequestReviewState {
	/**
	 * A review allowing the pull request to merge.
	 */
	Approved = 'APPROVED',

	/**
	 * A review blocking the pull request from merging.
	 */
	ChangesRequested = 'CHANGES_REQUESTED',

	/**
	 * An informational review.
	 */
	Commented = 'COMMENTED',

	/**
	 * A review that has been dismissed.
	 */
	Dismissed = 'DISMISSED',

	/**
	 * A review that has not yet been submitted.
	 */
	Pending = 'PENDING'
}

/**
 * The possible states of a pull request.
 */
export enum PullRequestState {
	/**
	 * A pull request that has been closed without being merged.
	 */
	Closed = 'CLOSED',

	/**
	 * A pull request that has been closed by being merged.
	 */
	Merged = 'MERGED',

	/**
	 * A pull request that is still open.
	 */
	Open = 'OPEN'
}

/**
 * The possible item types found in a timeline.
 */
export enum PullRequestTimelineItemsItemType {
	/**
	 * Represents a `added_to_project` event on a given issue or pull request.
	 */
	AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',

	/**
	 * Represents a `assigned` event on any assignable object.
	 */
	AssignedEvent = 'ASSIGNED_EVENT',

	/**
	 * Represents a `automatic_base_change_failed` event on a given pull request.
	 */
	AutomaticBaseChangeFailedEvent = 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT',

	/**
	 * Represents a `automatic_base_change_succeeded` event on a given pull request.
	 */
	AutomaticBaseChangeSucceededEvent = 'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT',

	/**
	 * Represents a `auto_merge_disabled` event on a given pull request.
	 */
	AutoMergeDisabledEvent = 'AUTO_MERGE_DISABLED_EVENT',

	/**
	 * Represents a `auto_merge_enabled` event on a given pull request.
	 */
	AutoMergeEnabledEvent = 'AUTO_MERGE_ENABLED_EVENT',

	/**
	 * Represents a `auto_rebase_enabled` event on a given pull request.
	 */
	AutoRebaseEnabledEvent = 'AUTO_REBASE_ENABLED_EVENT',

	/**
	 * Represents a `auto_squash_enabled` event on a given pull request.
	 */
	AutoSquashEnabledEvent = 'AUTO_SQUASH_ENABLED_EVENT',

	/**
	 * Represents a `base_ref_changed` event on a given issue or pull request.
	 */
	BaseRefChangedEvent = 'BASE_REF_CHANGED_EVENT',

	/**
	 * Represents a `base_ref_deleted` event on a given pull request.
	 */
	BaseRefDeletedEvent = 'BASE_REF_DELETED_EVENT',

	/**
	 * Represents a `base_ref_force_pushed` event on a given pull request.
	 */
	BaseRefForcePushedEvent = 'BASE_REF_FORCE_PUSHED_EVENT',

	/**
	 * Represents a `closed` event on any `Closable`.
	 */
	ClosedEvent = 'CLOSED_EVENT',

	/**
	 * Represents a `comment_deleted` event on a given issue or pull request.
	 */
	CommentDeletedEvent = 'COMMENT_DELETED_EVENT',

	/**
	 * Represents a `connected` event on a given issue or pull request.
	 */
	ConnectedEvent = 'CONNECTED_EVENT',

	/**
	 * Represents a `converted_note_to_issue` event on a given issue or pull request.
	 */
	ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',

	/**
	 * Represents a `convert_to_draft` event on a given pull request.
	 */
	ConvertToDraftEvent = 'CONVERT_TO_DRAFT_EVENT',

	/**
	 * Represents a mention made by one issue or pull request to another.
	 */
	CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',

	/**
	 * Represents a `demilestoned` event on a given issue or pull request.
	 */
	DemilestonedEvent = 'DEMILESTONED_EVENT',

	/**
	 * Represents a `deployed` event on a given pull request.
	 */
	DeployedEvent = 'DEPLOYED_EVENT',

	/**
	 * Represents a `deployment_environment_changed` event on a given pull request.
	 */
	DeploymentEnvironmentChangedEvent = 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',

	/**
	 * Represents a `disconnected` event on a given issue or pull request.
	 */
	DisconnectedEvent = 'DISCONNECTED_EVENT',

	/**
	 * Represents a `head_ref_deleted` event on a given pull request.
	 */
	HeadRefDeletedEvent = 'HEAD_REF_DELETED_EVENT',

	/**
	 * Represents a `head_ref_force_pushed` event on a given pull request.
	 */
	HeadRefForcePushedEvent = 'HEAD_REF_FORCE_PUSHED_EVENT',

	/**
	 * Represents a `head_ref_restored` event on a given pull request.
	 */
	HeadRefRestoredEvent = 'HEAD_REF_RESTORED_EVENT',

	/**
	 * Represents a comment on an Issue.
	 */
	IssueComment = 'ISSUE_COMMENT',

	/**
	 * Represents a `labeled` event on a given issue or pull request.
	 */
	LabeledEvent = 'LABELED_EVENT',

	/**
	 * Represents a `locked` event on a given issue or pull request.
	 */
	LockedEvent = 'LOCKED_EVENT',

	/**
	 * Represents a `marked_as_duplicate` event on a given issue or pull request.
	 */
	MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',

	/**
	 * Represents a `mentioned` event on a given issue or pull request.
	 */
	MentionedEvent = 'MENTIONED_EVENT',

	/**
	 * Represents a `merged` event on a given pull request.
	 */
	MergedEvent = 'MERGED_EVENT',

	/**
	 * Represents a `milestoned` event on a given issue or pull request.
	 */
	MilestonedEvent = 'MILESTONED_EVENT',

	/**
	 * Represents a `moved_columns_in_project` event on a given issue or pull request.
	 */
	MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',

	/**
	 * Represents a `pinned` event on a given issue or pull request.
	 */
	PinnedEvent = 'PINNED_EVENT',

	/**
	 * Represents a Git commit part of a pull request.
	 */
	PullRequestCommit = 'PULL_REQUEST_COMMIT',

	/**
	 * Represents a commit comment thread part of a pull request.
	 */
	PullRequestCommitCommentThread = 'PULL_REQUEST_COMMIT_COMMENT_THREAD',

	/**
	 * A review object for a given pull request.
	 */
	PullRequestReview = 'PULL_REQUEST_REVIEW',

	/**
	 * A threaded list of comments for a given pull request.
	 */
	PullRequestReviewThread = 'PULL_REQUEST_REVIEW_THREAD',

	/**
	 * Represents the latest point in the pull request timeline for which the viewer has seen the
	 * pull request's commits.
	 */
	PullRequestRevisionMarker = 'PULL_REQUEST_REVISION_MARKER',

	/**
	 * Represents a `ready_for_review` event on a given pull request.
	 */
	ReadyForReviewEvent = 'READY_FOR_REVIEW_EVENT',

	/**
	 * Represents a `referenced` event on a given `ReferencedSubject`.
	 */
	ReferencedEvent = 'REFERENCED_EVENT',

	/**
	 * Represents a `removed_from_project` event on a given issue or pull request.
	 */
	RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',

	/**
	 * Represents a `renamed` event on a given issue or pull request.
	 */
	RenamedTitleEvent = 'RENAMED_TITLE_EVENT',

	/**
	 * Represents a `reopened` event on any `Closable`.
	 */
	ReopenedEvent = 'REOPENED_EVENT',

	/**
	 * Represents a `review_dismissed` event on a given issue or pull request.
	 */
	ReviewDismissedEvent = 'REVIEW_DISMISSED_EVENT',

	/**
	 * Represents a `review_requested` event on a given pull request.
	 */
	ReviewRequestEvent = 'REVIEW_REQUESTED_EVENT',

	/**
	 * Represents a `review_request_removed` event on a given pull request.
	 */
	ReviewRequestRemovedEvent = 'REVIEW_REQUEST_REMOVED_EVENT',

	/**
	 * Represents a `subscribed` event on a given `Subscribable`.
	 */
	SubscribedEvent = 'SUBSCRIBED_EVENT',

	/**
	 * Represents a `transferred` event on a given issue or pull request.
	 */
	TransferredEvent = 'TRANSFERRED_EVENT',

	/**
	 * Represents a `unassigned` event on any assignable object.
	 */
	UnassignedEvent = 'UNASSIGNED_EVENT',

	/**
	 * Represents a `unlabeled` event on a given issue or pull request.
	 */
	UnlabeledEvent = 'UNLABELED_EVENT',

	/**
	 * Represents a `unlocked` event on a given issue or pull request.
	 */
	UnlockedEvent = 'UNLOCKED_EVENT',

	/**
	 * Represents a `unmarked_as_duplicate` event on a given issue or pull request.
	 */
	UnmarkedAsDuplicateEvent = 'UNMARKED_AS_DUPLICATE_EVENT',

	/**
	 * Represents a `unpinned` event on a given issue or pull request.
	 */
	UnpinnedEvent = 'UNPINNED_EVENT',

	/**
	 * Represents a `unsubscribed` event on a given `Subscribable`.
	 */
	UnsubscribedEvent = 'UNSUBSCRIBED_EVENT',

	/**
	 * Represents a `user_blocked` event on a given user.
	 */
	UserBlockedEvent = 'USER_BLOCKED_EVENT'
}

/**
 * The possible target states when updating a pull request.
 */
export enum PullRequestUpdateState {
	/**
	 * A pull request that has been closed without being merged.
	 */
	Closed = 'CLOSED',

	/**
	 * A pull request that is still open.
	 */
	Open = 'OPEN'
}

/**
 * Emojis that can be attached to Issues, Pull Requests and Comments.
 */
export enum ReactionContent {
	/**
	 * Represents the `:confused:` emoji.
	 */
	Confused = 'CONFUSED',

	/**
	 * Represents the `:eyes:` emoji.
	 */
	Eyes = 'EYES',

	/**
	 * Represents the `:heart:` emoji.
	 */
	Heart = 'HEART',

	/**
	 * Represents the `:hooray:` emoji.
	 */
	Hooray = 'HOORAY',

	/**
	 * Represents the `:laugh:` emoji.
	 */
	Laugh = 'LAUGH',

	/**
	 * Represents the `:rocket:` emoji.
	 */
	Rocket = 'ROCKET',

	/**
	 * Represents the `:-1:` emoji.
	 */
	ThumbsDown = 'THUMBS_DOWN',

	/**
	 * Represents the `:+1:` emoji.
	 */
	ThumbsUp = 'THUMBS_UP'
}

/**
 * A list of fields that reactions can be ordered by.
 */
export enum ReactionOrderField {
	/**
	 * Allows ordering a list of reactions by when they were created.
	 */
	CreatedAt = 'CREATED_AT'
}

export enum RefOrderField {
	/**
	 * Order refs by their alphanumeric name.
	 */
	Alphabetical = 'ALPHABETICAL',

	/**
	 * Order refs by underlying commit date if the ref prefix is `refs/tags/`.
	 */
	TagCommitDate = 'TAG_COMMIT_DATE'
}

export enum ReleaseOrderField {
	/**
	 * Order releases by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order releases alphabetically by name.
	 */
	Name = 'NAME'
}

/**
 * The privacy of a repository.
 */
export enum RepoAccessAuditEntryVisibility {
	/**
	 * The repository is visible only to users in the same business.
	 */
	Internal = 'INTERNAL',

	/**
	 * The repository is visible only to those with explicit access.
	 */
	Private = 'PRIVATE',

	/**
	 * The repository is visible to everyone.
	 */
	Public = 'PUBLIC'
}

/**
 * The privacy of a repository.
 */
export enum RepoAddMemberAuditEntryVisibility {
	/**
	 * The repository is visible only to users in the same business.
	 */
	Internal = 'INTERNAL',

	/**
	 * The repository is visible only to those with explicit access.
	 */
	Private = 'PRIVATE',

	/**
	 * The repository is visible to everyone.
	 */
	Public = 'PUBLIC'
}

/**
 * The privacy of a repository.
 */
export enum RepoArchivedAuditEntryVisibility {
	/**
	 * The repository is visible only to users in the same business.
	 */
	Internal = 'INTERNAL',

	/**
	 * The repository is visible only to those with explicit access.
	 */
	Private = 'PRIVATE',

	/**
	 * The repository is visible to everyone.
	 */
	Public = 'PUBLIC'
}

/**
 * The merge options available for pull requests to this repository.
 */
export enum RepoChangeMergeSettingAuditEntryMergeType {
	/**
	 * The pull request is added to the base branch in a merge commit.
	 */
	Merge = 'MERGE',

	/**
	 * Commits from the pull request are added onto the base branch individually without a merge
	 * commit.
	 */
	Rebase = 'REBASE',

	/**
	 * The pull request's commits are squashed into a single commit before they are merged to the
	 * base branch.
	 */
	Squash = 'SQUASH'
}

/**
 * The privacy of a repository.
 */
export enum RepoCreateAuditEntryVisibility {
	/**
	 * The repository is visible only to users in the same business.
	 */
	Internal = 'INTERNAL',

	/**
	 * The repository is visible only to those with explicit access.
	 */
	Private = 'PRIVATE',

	/**
	 * The repository is visible to everyone.
	 */
	Public = 'PUBLIC'
}

/**
 * The privacy of a repository.
 */
export enum RepoDestroyAuditEntryVisibility {
	/**
	 * The repository is visible only to users in the same business.
	 */
	Internal = 'INTERNAL',

	/**
	 * The repository is visible only to those with explicit access.
	 */
	Private = 'PRIVATE',

	/**
	 * The repository is visible to everyone.
	 */
	Public = 'PUBLIC'
}

/**
 * The privacy of a repository.
 */
export enum RepoRemoveMemberAuditEntryVisibility {
	/**
	 * The repository is visible only to users in the same business.
	 */
	Internal = 'INTERNAL',

	/**
	 * The repository is visible only to those with explicit access.
	 */
	Private = 'PRIVATE',

	/**
	 * The repository is visible to everyone.
	 */
	Public = 'PUBLIC'
}

/**
 * The reasons a piece of content can be reported or minimized.
 */
export enum ReportedContentClassifiers {
	/**
	 * An abusive or harassing piece of content.
	 */
	Abuse = 'ABUSE',

	/**
	 * A duplicated piece of content.
	 */
	Duplicate = 'DUPLICATE',

	/**
	 * An irrelevant piece of content.
	 */
	OffTopic = 'OFF_TOPIC',

	/**
	 * An outdated piece of content.
	 */
	Outdated = 'OUTDATED',

	/**
	 * The content has been resolved.
	 */
	Resolved = 'RESOLVED',

	/**
	 * A spammy piece of content.
	 */
	Spam = 'SPAM'
}

/**
 * The affiliation of a user to a repository.
 */
export enum RepositoryAffiliation {
	/**
	 * Repositories that the user has been added to as a collaborator.
	 */
	Collaborator = 'COLLABORATOR',

	/**
	 * Repositories that the user has access to through being a member of an
	 * organization. This includes every repository on every team that the user is on.
	 */
	OrganizationMember = 'ORGANIZATION_MEMBER',

	/**
	 * Repositories that are owned by the authenticated user.
	 */
	Owner = 'OWNER'
}

/**
 * The reason a repository is listed as `contributed`.
 */
export enum RepositoryContributionType {
	/**
	 * Created a commit.
	 */
	Commit = 'COMMIT',

	/**
	 * Created an issue.
	 */
	Issue = 'ISSUE',

	/**
	 * Created a pull request.
	 */
	PullRequest = 'PULL_REQUEST',

	/**
	 * Reviewed a pull request.
	 */
	PullRequestReview = 'PULL_REQUEST_REVIEW',

	/**
	 * Created the repository.
	 */
	Repository = 'REPOSITORY'
}

/**
 * A repository interaction limit.
 */
export enum RepositoryInteractionLimit {
	/**
	 * Users that are not collaborators will not be able to interact with the repository.
	 */
	CollaboratorsOnly = 'COLLABORATORS_ONLY',

	/**
	 * Users that have not previously committed to a repository’s default branch will be unable to
	 * interact with the repository.
	 */
	ContributorsOnly = 'CONTRIBUTORS_ONLY',

	/**
	 * Users that have recently created their account will be unable to interact with the
	 * repository.
	 */
	ExistingUsers = 'EXISTING_USERS',

	/**
	 * No interaction limits are enabled.
	 */
	NoLimit = 'NO_LIMIT'
}

/**
 * The length for a repository interaction limit to be enabled for.
 */
export enum RepositoryInteractionLimitExpiry {
	/**
	 * The interaction limit will expire after 1 day.
	 */
	OneDay = 'ONE_DAY',

	/**
	 * The interaction limit will expire after 1 month.
	 */
	OneMonth = 'ONE_MONTH',

	/**
	 * The interaction limit will expire after 1 week.
	 */
	OneWeek = 'ONE_WEEK',

	/**
	 * The interaction limit will expire after 6 months.
	 */
	SixMonths = 'SIX_MONTHS',

	/**
	 * The interaction limit will expire after 3 days.
	 */
	ThreeDays = 'THREE_DAYS'
}

/**
 * Indicates where an interaction limit is configured.
 */
export enum RepositoryInteractionLimitOrigin {
	/**
	 * A limit that is configured at the organization level.
	 */
	Organization = 'ORGANIZATION',

	/**
	 * A limit that is configured at the repository level.
	 */
	Repository = 'REPOSITORY',

	/**
	 * A limit that is configured at the user-wide level.
	 */
	User = 'USER'
}

export enum RepositoryOrderField {
	/**
	 * Order repositories by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order repositories by name.
	 */
	Name = 'NAME',

	/**
	 * Order repositories by push time.
	 */
	PushedAt = 'PUSHED_AT',

	/**
	 * Order repositories by number of stargazers.
	 */
	Stargazers = 'STARGAZERS',

	/**
	 * Order repositories by update time.
	 */
	UpdatedAt = 'UPDATED_AT'
}

export enum RepositoryInvitationOrderField {
	/**
	 * Order repository invitations by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order repository invitations by invitee login.
	 */
	InviteeLogin = 'INVITEE_LOGIN'
}

/**
 * The possible reasons a given repository could be in a locked state.
 */
export enum RepositoryLockReason {
	/**
	 * The repository is locked due to a billing related reason.
	 */
	Billing = 'BILLING',

	/**
	 * The repository is locked due to a migration.
	 */
	Migrating = 'MIGRATING',

	/**
	 * The repository is locked due to a move.
	 */
	Moving = 'MOVING',

	/**
	 * The repository is locked due to a rename.
	 */
	Rename = 'RENAME'
}

/**
 * The access level to a repository.
 */
export enum RepositoryPermission {
	/**
	 * Can read, clone, and push to this repository. Can also manage issues, pull
	 * requests, and repository settings, including adding collaborators.
	 */
	Admin = 'ADMIN',

	/**
	 * Can read, clone, and push to this repository. They can also manage issues, pull requests, and
	 * some repository settings.
	 */
	Maintain = 'MAINTAIN',

	/**
	 * Can read and clone this repository. Can also open and comment on issues and pull requests.
	 */
	Read = 'READ',

	/**
	 * Can read and clone this repository. Can also manage issues and pull requests.
	 */
	Triage = 'TRIAGE',

	/**
	 * Can read, clone, and push to this repository. Can also manage issues and pull requests.
	 */
	Write = 'WRITE'
}

/**
 * The privacy of a repository.
 */
export enum RepositoryPrivacy {
	/**
	 * Private.
	 */
	Private = 'PRIVATE',

	/**
	 * Public.
	 */
	Public = 'PUBLIC'
}

/**
 * The repository's visibility level.
 */
export enum RepositoryVisibility {
	/**
	 * The repository is visible only to users in the same business.
	 */
	Internal = 'INTERNAL',

	/**
	 * The repository is visible only to those with explicit access.
	 */
	Private = 'PRIVATE',

	/**
	 * The repository is visible to everyone.
	 */
	Public = 'PUBLIC'
}

/**
 * The possible states that can be requested when creating a check run.
 */
export enum RequestableCheckStatusState {
	/**
	 * The check suite or run has been completed.
	 */
	Completed = 'COMPLETED',

	/**
	 * The check suite or run is in progress.
	 */
	InProgress = 'IN_PROGRESS',

	/**
	 * The check suite or run has been queued.
	 */
	Queued = 'QUEUED',

	/**
	 * The check suite or run is in waiting state.
	 */
	Waiting = 'WAITING'
}

/**
 * The possible digest algorithms used to sign SAML requests for an identity provider.
 */
export enum SAMLDigestAlgorithm {
	/**
	 * SHA1.
	 */
	SHA1 = 'SHA1',

	/**
	 * SHA256.
	 */
	SHA256 = 'SHA256',

	/**
	 * SHA384.
	 */
	SHA384 = 'SHA384',

	/**
	 * SHA512.
	 */
	SHA512 = 'SHA512'
}

/**
 * The possible signature algorithms used to sign SAML requests for a Identity Provider.
 */
/* eslint-disable @typescript-eslint/naming-convention */
export enum SAMLSignatureAlgorithm {
	/**
	 * RSA-SHA1.
	 */
	RSA_SHA1 = 'RSA_SHA1',

	/**
	 * RSA-SHA256.
	 */
	RSA_SHA256 = 'RSA_SHA256',

	/**
	 * RSA-SHA384.
	 */
	RSA_SHA384 = 'RSA_SHA384',

	/**
	 * RSA-SHA512.
	 */
	RSA_SHA512 = 'RSA_SHA512'
}
/* eslint-enable @typescript-eslint/naming-convention */

export enum SavedReplyOrderField {
	/**
	 * Order saved reply by when they were updated.
	 */
	UpdatedAt = 'UPDATED_AT'
}

export enum SearchType {
	/**
	 * Returns results matching issues in repositories.
	 */
	Issue = 'ISSUE',

	/**
	 * Returns results matching repositories.
	 */
	Repository = 'REPOSITORY',

	/**
	 * Returns results matching users and organizations on GitHub.
	 */
	User = 'USER'
}

/**
 * The possible ecosystems of a security vulnerability's package.
 */
export enum SecurityAdvisoryEcosystem {
	/**
	 * PHP packages hosted at packagist.org.
	 */
	Composer = 'COMPOSER',

	/**
	 * Java artifacts hosted at the Maven central repository.
	 */
	Maven = 'MAVEN',

	/**
	 * JavaScript packages hosted at npmjs.com.
	 */
	NPM = 'NPM',

	/**
	 * .NET packages hosted at the NuGet Gallery.
	 */
	Nuget = 'NUGET',

	/**
	 * Python packages hosted at PyPI.org.
	 */
	PIP = 'PIP',

	/**
	 * Ruby gems hosted at RubyGems.org.
	 */
	RubyGems = 'RUBYGEMS'
}

/**
 * Identifier formats available for advisories.
 */
export enum SecurityAdvisoryIdentifierType {
	/**
	 * Common Vulnerabilities and Exposures Identifier.
	 */
	CVE = 'CVE',

	/**
	 * GitHub Security Advisory ID.
	 */
	GHSA = 'GHSA'
}

export enum SecurityAdvisoryOrderField {
	/**
	 * Order advisories by publication time.
	 */
	PublishedAt = 'PUBLISHED_AT',

	/**
	 * Order advisories by update time.
	 */
	UpdatedAt = 'UPDATED_AT'
}

/**
 * Severity of the vulnerability.
 */
export enum SecurityAdvisorySeverity {
	/**
	 * Critical.
	 */
	Critical = 'CRITICAL',

	/**
	 * High.
	 */
	High = 'HIGH',

	/**
	 * Low.
	 */
	Low = 'LOW',

	/**
	 * Moderate.
	 */
	Moderate = 'MODERATE'
}

export enum SecurityVulnerabilityOrderField {
	/**
	 * Order vulnerability by update time.
	 */
	UpdatedAt = 'UPDATED_AT'
}

export enum SponsorableOrderField {
	/**
	 * Order sponsorable entities by login (username).
	 */
	Login = 'LOGIN'
}

/**
 * The different kinds of goals a GitHub Sponsors member can have.
 */
export enum SponsorsGoalKind {
	/**
	 * The goal is about getting a certain dollar amount from sponsorships each month.
	 */
	MonthlySponsorshipAmount = 'MONTHLY_SPONSORSHIP_AMOUNT',

	/**
	 * The goal is about reaching a certain number of sponsors.
	 */
	TotalSponsorsCount = 'TOTAL_SPONSORS_COUNT'
}

export enum SponsorsTierOrderField {
	/**
	 * Order tiers by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order tiers by their monthly price in cents.
	 */
	MonthlyPriceInCents = 'MONTHLY_PRICE_IN_CENTS'
}

export enum SponsorshipOrderField {
	/**
	 * Order sponsorship by creation time.
	 */
	CreatedAt = 'CREATED_AT'
}

/**
 * The privacy of a sponsorship.
 */
export enum SponsorshipPrivacy {
	/**
	 * Private.
	 */
	Private = 'PRIVATE',

	/**
	 * Public.
	 */
	Public = 'PUBLIC'
}

export enum StarOrderField {
	/**
	 * Allows ordering a list of stars by when they were created.
	 */
	StarredAt = 'STARRED_AT'
}

/**
 * The possible commit status states.
 */
export enum StatusState {
	/**
	 * Status is errored.
	 */
	Error = 'ERROR',

	/**
	 * Status is expected.
	 */
	Expected = 'EXPECTED',

	/**
	 * Status is failing.
	 */
	Failure = 'FAILURE',

	/**
	 * Status is pending.
	 */
	Pending = 'PENDING',

	/**
	 * Status is successful.
	 */
	Succes = 'SUCCESS'
}

/**
 * The possible states of a subscription.
 */
export enum SubscriptionState {
	/**
	 * The User is never notified.
	 */
	Ignored = 'IGNORED',

	/**
	 * The User is notified of all conversations.
	 */
	Subscribed = 'SUBSCRIBED',

	/**
	 * The User is only notified when participating or `@mentioned`.
	 */
	Unsubscribed = 'UNSUBSCRIBED'
}

export enum TeamDiscussionCommentOrderField {
	/**
	 * Allows sequential ordering of team discussion comments (which is equivalent to chronological
	 * ordering).
	 */
	Number = 'NUMBER'
}

export enum TeamDiscussionOrderField {
	/**
	 * Allows chronological ordering of team discussions.
	 */
	CreatedAt = 'CREATED_AT'
}

export enum TeamMemberOrderField {
	/**
	 * Order team members by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order team members by login.
	 */
	Login = 'LOGIN'
}

/**
 * The possible team member roles,
 */
export enum TeamMemberRole {
	/**
	 * A team maintainer has permission to add and remove team members.
	 */
	Maintainer = 'MAINTAINER',

	/**
	 * A team member has no administrative permissions on the team.
	 */
	Member = 'MEMBER'
}

/**
 * Defines which types of team members are included in the returned list.
 */
export enum TeamMembershipType {
	/**
	 * Includes immediate and child team members for the team.
	 */
	All = 'ALL',

	/**
	 * Includes only child team members for the team.
	 */
	ChildTeam = 'CHILD_TEAM',

	/**
	 * Includes only immediate members of the team.
	 */
	Immediate = 'IMMEDIATE'
}

export enum TeamOrderField {
	/**
	 * Allows ordering a list of teams by name.
	 */
	Name = 'NAME'
}

/**
 * The possible team privacy values.
 */
export enum TeamPrivacy {
	/**
	 * A secret team can only be seen by its members.
	 */
	Secret = 'SECRET',

	/**
	 * A visible team can be seen and `@mentioned` by every member of the organization.
	 */
	Visible = 'VISIBLE'
}

export enum TeamRepositoryOrderField {
	/**
	 * Order repositories by creation time.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order repositories by name.
	 */
	Name = 'NAME',

	/**
	 * Order repositories by permission.
	 */
	Permission = 'PERMISSION',

	/**
	 * Order repositories by push time.
	 */
	PushedAt = 'PUSHED_AT',

	/**
	 * Order repositories by number of stargazers.
	 */
	Stargazers = 'STARGAZERS',

	/**
	 * Order repositories by update time.
	 */
	UpdatedAt = 'UPDATED_AT'
}

/**
 * The possible team review assignment algorithms.
 */
export enum TeamReviewAssignmentAlgorithm {
	/**
	 * Balance review load across the entire team.
	 */
	LoadBalance = 'LOAD_BALANCE',

	/**
	 * Alternate reviews between each team member.
	 */
	RoundRobin = 'ROUND_ROBIN'
}

/**
 * The role of a user on a team.
 */
export enum TeamRole {
	/**
	 * User has admin rights on the team.
	 */
	Admin = 'ADMIN',

	/**
	 * User is a member of the team.
	 */
	Member = 'MEMBER'
}

/**
 * Reason that the suggested topic is declined.
 */
export enum TopicSuggestionDeclineReason {
	/**
	 * The suggested topic is not relevant to the repository.
	 */
	NotRelevant = 'NOT_RELEVANT',

	/**
	 * The viewer does not like the suggested topic.
	 */
	PersonalPreference = 'PERSONAL_PREFERENCE',

	/**
	 * The suggested topic is too general for the repository.
	 */
	TooGeneral = 'TOO_GENERAL',

	/**
	 * The suggested topic is too specific for the repository.
	 */
	TooSpecific = 'TOO_SPECIFIC'
}

/**
 * The possible durations that a user can be blocked for.
 */
export enum UserBlockDuration {
	/**
	 * The user was blocked for 1 day.
	 */
	OneDay = 'ONE_DAY',

	/**
	 * The user was blocked for 30 days.
	 */
	OneMonth = 'ONE_MONTH',

	/**
	 * The user was blocked for 7 days.
	 */
	OneWeek = 'ONE_WEEK',

	/**
	 * The user was blocked permanently.
	 */
	Permanent = 'PERMANENT',

	/**
	 * The user was blocked for 3 days.
	 */
	ThreeDays = 'THREE_DAYS'
}

export enum UserStatusOrderField {
	/**
	 * Order user statuses by when they were updated.
	 */
	UpdatedAt = 'UPDATED_AT'
}

export enum VerifiableDomainOrderField {
	/**
	 * Order verifiable domains by their creation date.
	 */
	CreatedAt = 'CREATED_AT',

	/**
	 * Order verifiable domains by the domain name.
	 */
	Domain = 'DOMAIN'
}
