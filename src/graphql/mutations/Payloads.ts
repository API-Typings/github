import type { Nullable } from 'extended-utility-types';
import type {
	Actor,
	Assignable,
	BranchProtectionRule,
	CheckRun,
	CheckSuite,
	Commit,
	ContentAttachment,
	Deployment,
	DeploymentStatus,
	Enterprise,
	EnterpriseAdministratorInvitation,
	EnterpriseIdentityProvider,
	InputObject,
	IpAllowListEntry,
	IpAllowListOwner,
	Issue,
	IssueComment,
	IssueCommentEdge,
	IssueOrPullRequest,
	IssueTimelineItemEdge,
	Label,
	Labelable,
	Lockable,
	MetaField,
	Minimizable,
	Node,
	Organization,
	Project,
	ProjectCard,
	ProjectCardEdge,
	ProjectColumn,
	ProjectColumnEdge,
	ProjectOwner,
	PullRequest,
	PullRequestReview,
	PullRequestReviewComment,
	PullRequestReviewCommentEdge,
	PullRequestReviewEdge,
	PullRequestReviewThread,
	Reactable,
	Reaction,
	Ref,
	Repository,
	Starrable,
	Subscribable,
	Team,
	TeamDiscussion,
	TeamDiscussionComment,
	Topic,
	User,
	UserEdge,
	UserStatus,
	VerifiableDomain,
	VerifiableDomainOwner
} from '../';

export interface AcceptEnterpriseAdministratorInvitationPayload
	extends MetaField<'AcceptEnterpriseAdministratorInvitationPayload'>,
		InputObject {
	/**
	 * The invitation that was accepted.
	 */
	invitation?: EnterpriseAdministratorInvitation;

	/**
	 * A message confirming the result of accepting an administrator invitation.
	 */
	message?: string;
}

export interface AcceptTopicSuggestionPayload extends MetaField<'AcceptTopicSuggestionPayload'>, InputObject {
	/**
	 * The accepted topic.
	 */
	topic?: Nullable<Topic>;
}

export interface AddAssigneesToAssignablePayload extends MetaField<'AddAssigneesToAssignablePayload'> {
	/**
	 * The item that was assigned.
	 */
	assignable?: Nullable<Assignable>;
}

export interface AddCommentPayload extends MetaField<'AddCommentPayload'>, InputObject {
	/**
	 * The edge from the subject's comment connection.
	 */
	commentEdge?: Nullable<IssueCommentEdge>;

	/**
	 * The subject
	 */
	subject?: Nullable<Node>;

	/**
	 * The edge from the subject's timeline connection.
	 */
	timelineEdge?: Nullable<IssueTimelineItemEdge>;
}

export interface AddEnterpriseSupportEntitlementPayload
	extends MetaField<'AddEnterpriseSupportEntitlementPayload'>,
		InputObject {
	/**
	 * A message confirming the result of adding the support entitlement.
	 */
	message?: Nullable<string>;
}

export interface AddLabelsToLabelablePayload extends MetaField<'AddLabelsToLabelablePayload'>, InputObject {
	/**
	 * The item that was labeled.
	 */
	labelable?: Nullable<Labelable>;
}

export interface AddProjectCardPayload extends MetaField<'AddProjectCardPayload'>, InputObject {
	/**
	 * The edge from the ProjectColumn's card connection.
	 */
	cardEdge?: Nullable<ProjectCardEdge>;

	/**
	 * The ProjectColumn
	 */
	projectColumn?: Nullable<ProjectColumn>;
}

export interface AddProjectColumnPayload extends MetaField<'AddProjectColumnPayload'>, InputObject {
	/**
	 * The edge from the project's column connection.
	 */
	columnEdge?: Nullable<ProjectColumnEdge>;

	/**
	 * The project
	 */
	project?: Nullable<Project>;
}

export interface AddPullRequestReviewCommentPayload
	extends MetaField<'AddPullRequestReviewCommentPayload'>,
		InputObject {
	/**
	 * The newly created comment.
	 */
	comment?: Nullable<PullRequestReviewComment>;

	/**
	 * The edge from the review's comment connection.
	 */
	commentEdge?: Nullable<PullRequestReviewCommentEdge>;
}

export interface AddPullRequestReviewPayload extends MetaField<'AddPullRequestReviewPayload'>, InputObject {
	/**
	 * The newly created pull request review.
	 */
	pullRequestReview?: Nullable<PullRequestReview>;

	/**
	 * The edge from the pull request's review connection.
	 */
	reviewEdge?: Nullable<PullRequestReviewEdge>;
}

export interface AddPullRequestReviewThreadPayload extends MetaField<'AddPullRequestReviewThreadPayload'>, InputObject {
	/**
	 * The newly created thread.
	 */
	thread?: Nullable<PullRequestReviewThread>;
}

export interface AddReactionPayload extends MetaField<'AddReactionPayload'>, InputObject {
	/**
	 * The reaction object.
	 */
	reaction?: Nullable<Reaction>;

	/**
	 * The reactable subject.
	 */
	subject?: Nullable<Reactable>;
}

export interface AddStarPayload extends MetaField<'AddStarPayload'>, InputObject {
	/**
	 * The starrable.
	 */
	starrable?: Nullable<Starrable>;
}

export interface AddVerifiableDomainPayload extends MetaField<'AddVerifiableDomainPayload'>, InputObject {
	/**
	 * The verifiable domain that was added.
	 */
	domain?: Nullable<VerifiableDomain>;
}

export interface ApproveVerifiableDomainPayload extends MetaField<'ApproveVerifiableDomainPayload'>, InputObject {
	/**
	 * The verifiable domain that was approved.
	 */
	domain?: Nullable<VerifiableDomain>;
}

export interface ArchiveRepositoryPayload extends MetaField<'ArchiveRepositoryPayload'>, InputObject {
	/**
	 * The repository that was marked as archived.
	 */
	repository?: Nullable<Repository>;
}

export interface CancelEnterpriseAdminInvitationPayload
	extends MetaField<'CancelEnterpriseAdminInvitationPayload'>,
		InputObject {
	/**
	 * The invitation that was canceled.
	 */
	invitation?: Nullable<EnterpriseAdministratorInvitation>;

	/**
	 * A message confirming the result of canceling an administrator invitation.
	 */
	message?: Nullable<string>;
}

export interface ChangeUserStatusPayload extends MetaField<'ChangeUserStatusPayload'>, InputObject {
	/**
	 * Your updated status.
	 */
	status?: Nullable<UserStatus>;
}

export interface ClearLabelsFromLabelablePayload extends MetaField<'ClearLabelsFromLabelablePayload'>, InputObject {
	/**
	 * The item that was unlabeled.
	 */
	labelable?: Nullable<Labelable>;
}

export interface CloneProjectPayload extends MetaField<'CloneProjectPayload'>, InputObject {
	/**
	 * The id of the JobStatus for populating cloned fields.
	 */
	jobStatusId?: Nullable<string>;

	/**
	 * The new cloned project.
	 */
	project?: Nullable<Project>;
}

export interface CloneTemplateRepositoryPayload extends MetaField<'CloneTemplateRepositoryPayload'>, InputObject {
	/**
	 * The new repository.
	 */
	repository?: Nullable<Repository>;
}

export interface CloseIssuePayload extends MetaField<'CloseIssuePayload'>, InputObject {
	/**
	 * The issue that was closed.
	 */
	issue?: Nullable<Issue>;
}

export interface ClosePullRequestPayload extends MetaField<'ClosePullRequestPayload'>, InputObject {
	/**
	 * The pull request that was closed.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface ConvertProjectCardNoteToIssuePayload
	extends MetaField<'ConvertProjectCardNoteToIssuePayload'>,
		InputObject {
	/**
	 * The updated ProjectCard.
	 */
	projectCard?: Nullable<ProjectCard>;
}

export interface CreateBranchProtectionRulePayload extends MetaField<'CreateBranchProtectionRulePayload'>, InputObject {
	/**
	 * The newly created BranchProtectionRule.
	 */
	branchProtectionRule?: Nullable<BranchProtectionRule>;
}

export interface CreateCheckRunPayload extends MetaField<'CreateCheckRunPayload'>, InputObject {
	/**
	 * The newly created check run.
	 */
	checkRun?: Nullable<CheckRun>;
}

export interface CreateCheckSuitePayload extends MetaField<'CreateCheckSuitePayload'>, InputObject {
	/**
	 * The newly created check suite.
	 */
	checkSuite?: Nullable<CheckSuite>;
}

export interface CreateContentAttachmentPayload extends MetaField<'CreateContentAttachmentPayload'>, InputObject {
	/**
	 * The newly created content attachment.
	 */
	contentAttachment?: Nullable<ContentAttachment>;
}

export interface CreateDeploymentPayload extends MetaField<'CreateDeploymentPayload'>, InputObject {
	/**
	 * `true` if the default branch has been auto-merged into the deployment ref.
	 */
	autoMerged?: Nullable<boolean>;

	/**
	 * The new deployment.
	 */
	deployment?: Nullable<Deployment>;
}

export interface CreateDeploymentStatusPayload extends MetaField<'CreateDeploymentStatusPayload'>, InputObject {
	/**
	 * The new deployment status.
	 */
	deploymentStatus?: Nullable<DeploymentStatus>;
}

export interface CreateEnterpriseOrganizationPayload
	extends MetaField<'CreateEnterpriseOrganizationPayload'>,
		InputObject {
	/**
	 * The enterprise that owns the created organization.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * The organization that was created.
	 */
	organization?: Nullable<Organization>;
}

export interface CreateIpAllowListEntryPayload extends MetaField<'CreateIpAllowListEntryPayload'>, InputObject {
	/**
	 * The IP allow list entry that was created.
	 */
	ipAllowListEntry?: Nullable<IpAllowListEntry>;
}

export interface CreateIssuePayload extends MetaField<'CreateIssuePayload'>, InputObject {
	/**
	 * The new issue.
	 */
	issue?: Nullable<Issue>;
}

export interface CreateLabelPayload extends MetaField<'CreateLabelPayload'>, InputObject {
	label?: Nullable<Label>;
}

export interface CreateProjectPayload extends MetaField<'CreateProjectPayload'>, InputObject {
	/**
	 * The new project.
	 */
	project?: Nullable<Project>;
}

export interface CreatePullRequestPayload extends MetaField<'CreatePullRequestPayload'>, InputObject {
	/**
	 * The new pull request.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface CreateRefPayload extends MetaField<'CreateRefPayload'>, InputObject {
	/**
	 * The newly created ref.
	 */
	ref?: Nullable<Ref>;
}

export interface CreateRepositoryPayload extends MetaField<'CreateRepositoryPayload'>, InputObject {
	/**
	 * The new repository.
	 */
	repository?: Nullable<Repository>;
}

export interface CreateTeamDiscussionCommentPayload
	extends MetaField<'CreateTeamDiscussionCommentPayload'>,
		InputObject {
	/**
	 * The new comment.
	 */
	teamDiscussionComment?: Nullable<TeamDiscussionComment>;
}

export interface CreateTeamDiscussionPayload extends MetaField<'CreateTeamDiscussionPayload'>, InputObject {
	/**
	 * The new discussion.
	 */
	teamDiscussion?: Nullable<TeamDiscussion>;
}

export interface DeclineTopicSuggestionPayload extends MetaField<'DeclineTopicSuggestionPayload'>, InputObject {
	/**
	 * The declined topic.
	 */
	topic?: Nullable<Topic>;
}

export type DeleteBranchProtectionRulePayload = MetaField<'DeleteBranchProtectionRulePayload'> & InputObject;

export type DeleteDeploymentPayload = MetaField<'DeleteDeploymentPayload'> & InputObject;

export interface DeleteIpAllowListEntryPayload extends MetaField<'DeleteIpAllowListEntryPayload'>, InputObject {
	/**
	 * The IP allow list entry that was deleted.
	 */
	ipAllowListEntry?: Nullable<IpAllowListEntry>;
}

export type DeleteIssueCommentPayload = MetaField<'DeleteIssueCommentPayload'> & InputObject;

export interface DeleteIssuePayload extends MetaField<'DeleteIssuePayload'>, InputObject {
	/**
	 * The repository the issue belonged to
	 */
	repository?: Nullable<Repository>;
}

export type DeleteLabelPayload = InputObject;

export interface DeletePackageVersionPayload extends MetaField<'DeletePackageVersionPayload'>, InputObject {
	/**
	 * Whether or not the operation succeeded.
	 */
	success?: Nullable<boolean>;
}

export interface DeleteProjectCardPayload extends MetaField<'DeleteProjectCardPayload'>, InputObject {
	/**
	 * The column the deleted card was in.
	 */
	column?: Nullable<ProjectColumn>;

	/**
	 * The deleted card ID.
	 */
	deletedCardId?: Nullable<string>;
}

export interface DeleteProjectColumnPayload extends MetaField<'DeleteProjectColumnPayload'>, InputObject {
	/**
	 * The deleted column ID.
	 */
	deletedColumnId?: Nullable<string>;

	/**
	 * The project the deleted column was in.
	 */
	project?: Nullable<Project>;
}

export interface DeleteProjectPayload extends MetaField<'DeleteProjectPayload'>, InputObject {
	/**
	 * The repository or organization the project was removed from.
	 */
	owner?: Nullable<ProjectOwner>;
}

export interface DeletePullRequestReviewCommentPayload
	extends MetaField<'DeletePullRequestReviewCommentPayload'>,
		InputObject {
	/**
	 * The pull request review the deleted comment belonged to.
	 */
	pullRequestReview?: Nullable<PullRequestReview>;
}

export interface DeletePullRequestReviewPayload extends MetaField<'DeletePullRequestReviewPayload'>, InputObject {
	/**
	 * The deleted pull request review.
	 */
	pullRequestReview?: Nullable<PullRequestReview>;
}

export type DeleteRefPayload = MetaField<'DeleteRefPayload'> & InputObject;

export type DeleteTeamDiscussionCommentPayload = MetaField<'DeleteTeamDiscussionCommentPayload'> & InputObject;

export type DeleteTeamDiscussionPayload = MetaField<'DeleteTeamDiscussionPayload'> & InputObject;

export interface DeleteVerifiableDomainPayload extends MetaField<'DeleteVerifiableDomainPayload'>, InputObject {
	/**
	 * The owning account from which the domain was deleted.
	 */
	owner?: Nullable<VerifiableDomainOwner>;
}

export interface DisablePullRequestAutoMergePayload
	extends MetaField<'DisablePullRequestAutoMergePayload'>,
		InputObject {
	/**
	 * Identifies the actor who performed the event.
	 */
	actor?: Nullable<Actor>;

	/**
	 * The pull request auto merge was disabled on.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface DismissPullRequestReviewPayload extends MetaField<'DismissPullRequestReviewPayload'>, InputObject {
	/**
	 * The dismissed pull request review.
	 */
	pullRequestReview?: Nullable<PullRequestReview>;
}

export interface EnablePullRequestAutoMergePayload extends MetaField<'EnablePullRequestAutoMergePayload'>, InputObject {
	/**
	 * Identifies the actor who performed the event.
	 */
	actor?: Nullable<Actor>;

	/**
	 * The pull request auto-merge was enabled on.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface FollowUserPayload extends MetaField<'FollowUserPayload'>, InputObject {
	/**
	 * The user that was followed.
	 */
	user?: Nullable<User>;
}

export interface ImportProjectPayload extends MetaField<'ImportProjectPayload'>, InputObject {
	/**
	 * The new project.
	 */
	project?: Nullable<Project>;
}

export interface InviteEnterpriseAdminPayload extends MetaField<'InviteEnterpriseAdminPayload'>, InputObject {
	/**
	 * The created enterprise administrator invitation.
	 */
	invitation?: Nullable<EnterpriseAdministratorInvitation>;
}

export interface LinkRepositoryToProjectPayload extends MetaField<'LinkRepositoryToProjectPayload'>, InputObject {
	/**
	 * The linked Project.
	 */
	project?: Nullable<Project>;

	/**
	 * The linked Repository.
	 */
	repository?: Nullable<Repository>;
}

export interface LockLockablePayload extends MetaField<'LockLockablePayload'>, InputObject {
	/**
	 * Identifies the actor who performed the event.
	 */
	actor?: Nullable<Actor>;

	/**
	 * The item that was locked.
	 */
	lockedRecord?: Nullable<Lockable>;
}

export interface MarkFileAsViewedPayload extends MetaField<'MarkFileAsViewedPayload'>, InputObject {
	/**
	 * The updated pull request.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface MarkPullRequestReadyForReviewPayload
	extends MetaField<'MarkPullRequestReadyForReviewPayload'>,
		InputObject {
	/**
	 * The pull request that is ready for review.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface MergeBranchPayload extends MetaField<'MergeBranchPayload'>, InputObject {
	/**
	 * The resulting merge Commit.
	 */
	mergeCommit?: Nullable<Commit>;
}

export interface MergePullRequestPayload extends MetaField<'MergePullRequestPayload'>, InputObject {
	/**
	 * Identifies the actor who performed the event.
	 */
	actor?: Nullable<Actor>;

	/**
	 * The pull request that was merged.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface MinimizeCommentPayload extends MetaField<'MinimizeCommentPayload'>, InputObject {
	/**
	 * The comment that was minimized.
	 */
	minimizedComment?: Nullable<Minimizable>;
}

export interface MoveProjectCardPayload extends MetaField<'MoveProjectCardPayload'>, InputObject {
	/**
	 * The new edge of the moved card.
	 */
	cardEdge?: Nullable<ProjectCardEdge>;
}

export interface MoveProjectColumnPayload extends MetaField<'MoveProjectColumnPayload'>, InputObject {
	/**
	 * The new edge of the moved column.
	 */
	columnEdge?: Nullable<ProjectColumnEdge>;
}

export interface PinIssuePayload extends MetaField<'PinIssuePayload'>, InputObject {
	/**
	 * The issue that was pinned
	 */
	issue?: Nullable<Issue>;
}

export interface RegenerateEnterpriseIdentityProviderRecoveryCodesPayload
	extends MetaField<'RegenerateEnterpriseIdentityProviderRecoveryCodesPayload'>,
		InputObject {
	/**
	 * The identity provider for the enterprise.
	 */
	identityProvider?: Nullable<EnterpriseIdentityProvider>;
}

export interface RegenerateVerifiableDomainTokenPayload
	extends MetaField<'RegenerateVerifiableDomainTokenPayload'>,
		InputObject {
	/**
	 * The verification token that was generated.
	 */
	verificationToken?: Nullable<string>;
}

export interface RemoveAssigneesFromAssignablePayload
	extends MetaField<'RemoveAssigneesFromAssignablePayload'>,
		InputObject {
	/**
	 * The item that was unassigned.
	 */
	assignable?: Nullable<Assignable>;
}

export interface RemoveEnterpriseAdminPayload extends MetaField<'RemoveEnterpriseAdminPayload'>, InputObject {
	/**
	 * The user who was removed as an administrator.
	 */
	admin?: Nullable<User>;

	/**
	 * The updated enterprise.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of removing an administrator.
	 */
	message?: Nullable<string>;

	/**
	 * The viewer performing the mutation.
	 */
	viewer?: Nullable<User>;
}

export interface RemoveEnterpriseIdentityProviderPayload
	extends MetaField<'RemoveEnterpriseIdentityProviderPayload'>,
		InputObject {
	/**
	 * The identity provider that was removed from the enterprise.
	 */
	identityProvider?: Nullable<EnterpriseIdentityProvider>;
}

export interface RemoveEnterpriseOrganizationPayload
	extends MetaField<'RemoveEnterpriseOrganizationPayload'>,
		InputObject {
	/**
	 * The updated enterprise.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * The organization that was removed from the enterprise.
	 */
	organization?: Nullable<Organization>;

	/**
	 * The viewer performing the mutation.
	 */
	viewer?: Nullable<User>;
}

export interface RemoveEnterpriseSupportEntitlementPayload
	extends MetaField<'RemoveEnterpriseSupportEntitlementPayload'>,
		InputObject {
	/**
	 * A message confirming the result of removing the support entitlement.
	 */
	message?: Nullable<string>;
}

export interface RemoveLabelsFromLabelablePayload extends MetaField<'RemoveLabelsFromLabelablePayload'>, InputObject {
	/**
	 * The Labelable the labels were removed from.
	 */
	labelable?: Nullable<Labelable>;
}

export interface RemoveOutsideCollaboratorPayload extends MetaField<'RemoveOutsideCollaboratorPayload'>, InputObject {
	/**
	 * The user that was removed as an outside collaborator.
	 */
	removedUser?: Nullable<User>;
}

export interface RemoveReactionPayload extends MetaField<'RemoveReactionPayload'>, InputObject {
	/**
	 * The reaction object.
	 */
	reaction?: Nullable<Reaction>;

	/**
	 * The reactable subject.
	 */
	subject?: Nullable<Reactable>;
}

export interface RemoveStarPayload extends MetaField<'RemoveStarPayload'>, InputObject {
	/**
	 * The starrable.
	 */
	starrable?: Nullable<Starrable>;
}

export interface ReopenIssuePayload extends MetaField<'ReopenIssuePayload'>, InputObject {
	/**
	 * The issue that was opened.
	 */
	issue?: Nullable<Issue>;
}

export interface ReopenPullRequestPayload extends MetaField<'ReopenPullRequestPayload'>, InputObject {
	/**
	 * The pull request that was reopened.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface RequestReviewsPayload extends MetaField<'RequestReviewsPayload'>, InputObject {
	/**
	 * Identifies the actor who performed the event.
	 */
	actor?: Nullable<Actor>;

	/**
	 * The pull request that is getting requests.
	 */
	pullRequest?: Nullable<PullRequest>;

	/**
	 * The edge from the pull request to the requested reviewers.
	 */
	requestedReviewersEdge?: Nullable<UserEdge>;
}

export interface RerequestCheckSuitePayload extends MetaField<'RerequestCheckSuitePayload'>, InputObject {
	/**
	 * The requested check suite.
	 */
	checkSuite?: Nullable<CheckSuite>;
}

export interface ResolveReviewThreadPayload extends MetaField<'ResolveReviewThreadPayload'>, InputObject {
	/**
	 * The thread to resolve.
	 */
	thread?: Nullable<PullRequestReviewThread>;
}

export interface SetEnterpriseIdentityProviderPayload
	extends MetaField<'SetEnterpriseIdentityProviderPayload'>,
		InputObject {
	/**
	 * The identity provider for the enterprise.
	 */
	identityProvider?: Nullable<EnterpriseIdentityProvider>;
}

export interface SetOrganizationInteractionLimitPayload
	extends MetaField<'SetOrganizationInteractionLimitPayload'>,
		InputObject {
	/**
	 * The organization that the interaction limit was set for.
	 */
	organization?: Nullable<Organization>;
}

export interface SetRepositoryInteractionLimitPayload
	extends MetaField<'SetRepositoryInteractionLimitPayload'>,
		InputObject {
	/**
	 * The repository that the interaction limit was set for.
	 */
	repository?: Nullable<Repository>;
}

export interface SetUserInteractionLimitPayload extends MetaField<'SetUserInteractionLimitPayload'>, InputObject {
	/**
	 * The user that the interaction limit was set for.
	 */
	user?: Nullable<User>;
}

export interface SubmitPullRequestReviewPayload extends MetaField<'SubmitPullRequestReviewPayload'>, InputObject {
	/**
	 * The submitted pull request review.
	 */
	pullRequestReview?: Nullable<PullRequestReview>;
}

export interface TransferIssuePayload extends MetaField<'TransferIssuePayload'>, InputObject {
	/**
	 * The issue that was transferred
	 */
	issue?: Nullable<Issue>;
}

export interface UnarchiveRepositoryPayload extends MetaField<'UnarchiveRepositoryPayload'>, InputObject {
	/**
	 * The repository that was unarchived.
	 */
	repository?: Nullable<Repository>;
}

export interface UnfollowUserPayload extends MetaField<'UnfollowUserPayload'>, InputObject {
	/**
	 * The user that was unfollowed.
	 */
	user?: Nullable<User>;
}

export interface UnlinkRepositoryFromProjectPayload
	extends MetaField<'UnlinkRepositoryFromProjectPayload'>,
		InputObject {
	/**
	 * The linked Project.
	 */
	project?: Nullable<Project>;

	/**
	 * The linked Repository.
	 */
	repository?: Nullable<Repository>;
}

export interface UnlockLockablePayload extends MetaField<'UnlockLockablePayload'>, InputObject {
	/**
	 * Identifies the actor who performed the event.
	 */
	actor?: Nullable<Actor>;

	/**
	 * The item that was unlocked.
	 */
	unlockedRecord?: Nullable<Lockable>;
}

export interface UnmarkFileAsViewedPayload extends MetaField<'UnmarkFileAsViewedPayload'>, InputObject {
	/**
	 * The updated pull request.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface UnmarkIssueAsDuplicatePayload extends MetaField<'UnmarkIssueAsDuplicatePayload'>, InputObject {
	/**
	 * The issue or pull request that was marked as a duplicate.
	 */
	duplicate?: Nullable<IssueOrPullRequest>;
}

export interface UnminimizeCommentPayload extends MetaField<'UnminimizeCommentPayload'>, InputObject {
	/**
	 * The comment that was unminimized.
	 */
	unminimizedComment?: Nullable<Minimizable>;
}

export interface UnpinIssuePayload extends MetaField<'UnpinIssuePayload'>, InputObject {
	/**
	 * The issue that was unpinned
	 */
	issue?: Nullable<Issue>;
}

export interface UnresolveReviewThreadPayload extends MetaField<'UnresolveReviewThreadPayload'>, InputObject {
	/**
	 * The thread to resolve.
	 */
	thread?: Nullable<PullRequestReviewThread>;
}

export interface UpdateBranchProtectionRulePayload extends MetaField<'UpdateBranchProtectionRulePayload'>, InputObject {
	/**
	 * The newly created BranchProtectionRule.
	 */
	branchProtectionRule?: Nullable<BranchProtectionRule>;
}

export interface UpdateCheckRunPayload extends MetaField<'UpdateCheckRunPayload'>, InputObject {
	/**
	 * The updated check run.
	 */
	checkRun?: Nullable<CheckRun>;
}

export interface UpdateCheckSuitePreferencesPayload
	extends MetaField<'UpdateCheckSuitePreferencesPayload'>,
		InputObject {
	/**
	 * The updated repository.
	 */
	repository?: Nullable<Repository>;
}

export interface UpdateEnterpriseAdministratorRolePayload
	extends MetaField<'UpdateEnterpriseAdministratorRolePayload'>,
		InputObject {
	/**
	 * A message confirming the result of changing the administrator's role.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload
	extends MetaField<'UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated allow private repository forking setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the allow private repository forking setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseDefaultRepositoryPermissionSettingPayload
	extends MetaField<'UpdateEnterpriseDefaultRepositoryPermissionSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated default repository permission setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the default repository permission setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload
	extends MetaField<'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated members can change repository visibility setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the members can change repository visibility
	 * setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload
	extends MetaField<'UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated members can create repositories setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the members can create repositories setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseMembersCanDeleteIssuesSettingPayload
	extends MetaField<'UpdateEnterpriseMembersCanDeleteIssuesSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated members can delete issues setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the members can delete issues setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload
	extends MetaField<'UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated members can delete repositories setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the members can delete repositories setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload
	extends MetaField<'UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated members can invite collaborators setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the members can invite collaborators setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseMembersCanMakePurchasesSettingPayload
	extends MetaField<'UpdateEnterpriseMembersCanMakePurchasesSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated members can make purchases setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the members can make purchases setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload
	extends MetaField<'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated members can update protected branches setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the members can update protected branches
	 * setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload
	extends MetaField<'UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated members can view dependency insights setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the members can view dependency insights setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseOrganizationProjectsSettingPayload
	extends MetaField<'UpdateEnterpriseOrganizationProjectsSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated organization projects setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the organization projects setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseProfilePayload extends MetaField<'UpdateEnterpriseProfilePayload'>, InputObject {
	/**
	 * The updated enterprise.
	 */
	enterprise?: Nullable<Enterprise>;
}

export interface UpdateEnterpriseRepositoryProjectsSettingPayload
	extends MetaField<'UpdateEnterpriseRepositoryProjectsSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated repository projects setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the repository projects setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseTeamDiscussionsSettingPayload
	extends MetaField<'UpdateEnterpriseTeamDiscussionsSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated team discussions setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the team discussions setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload
	extends MetaField<'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload'>,
		InputObject {
	/**
	 * The enterprise with the updated two factor authentication required setting.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * A message confirming the result of updating the two factor authentication required setting.
	 */
	message?: Nullable<string>;
}

export interface UpdateIpAllowListEnabledSettingPayload
	extends MetaField<'UpdateIpAllowListEnabledSettingPayload'>,
		InputObject {
	/**
	 * The IP allow list owner on which the setting was updated.
	 */
	owner?: Nullable<IpAllowListOwner>;
}

export interface UpdateIpAllowListEntryPayload extends MetaField<'UpdateIpAllowListEntryPayload'>, InputObject {
	/**
	 * The IP allow list entry that was updated.
	 */
	ipAllowListEntry?: Nullable<IpAllowListEntry>;
}

export interface UpdateIssueCommentPayload extends MetaField<'UpdateIssueCommentPayload'>, InputObject {
	/**
	 * The updated comment.
	 */
	issueComment?: Nullable<IssueComment>;
}

export interface UpdateIssuePayload extends MetaField<'UpdateIssuePayload'>, InputObject {
	/**
	 * Identifies the actor who performed the event.
	 */
	actor?: Nullable<Actor>;

	/**
	 * The issue.
	 */
	issue?: Nullable<Issue>;
}

export interface UpdateLabelPayload extends MetaField<'UpdateLabelPayload'>, InputObject {
	/**
	 * The updated label.
	 */
	label?: Nullable<Label>;
}

export interface UpdateNotificationRestrictionSettingPayload
	extends MetaField<'UpdateNotificationRestrictionSettingPayload'>,
		InputObject {
	/**
	 * The owner on which the setting was updated.
	 */
	owner?: Nullable<VerifiableDomainOwner>;
}

export interface UpdateProjectCardPayload extends MetaField<'UpdateProjectCardPayload'>, InputObject {
	/**
	 * The updated ProjectCard.
	 */
	projectCard?: Nullable<ProjectCard>;
}

export interface UpdateProjectColumnPayload extends MetaField<'UpdateProjectColumnPayload'>, InputObject {
	/**
	 * The updated project column.
	 */
	projectColumn?: Nullable<ProjectColumn>;
}

export interface UpdateProjectPayload extends MetaField<'UpdateProjectPayload'>, InputObject {
	/**
	 * The updated project.
	 */
	project?: Nullable<Project>;
}

export interface UpdatePullRequestPayload extends MetaField<'UpdatePullRequestPayload'>, InputObject {
	/**
	 * Identifies the actor who performed the event.
	 */
	actor?: Nullable<Actor>;

	/**
	 * The updated pull request.
	 */
	pullRequest?: Nullable<PullRequest>;
}

export interface UpdatePullRequestReviewCommentPayload
	extends MetaField<'UpdatePullRequestReviewCommentPayload'>,
		InputObject {
	/**
	 * The updated comment.
	 */
	pullRequestReviewComment?: Nullable<PullRequestReviewComment>;
}

export interface UpdatePullRequestReviewPayload extends MetaField<'UpdatePullRequestReviewPayload'>, InputObject {
	/**
	 * The updated pull request review.
	 */
	pullRequestReview?: Nullable<PullRequestReview>;
}

export interface UpdateRefPayload extends MetaField<'UpdateRefPayload'>, InputObject {
	/**
	 * The updated Ref.
	 */
	ref?: Nullable<Ref>;
}

export type UpdateRefsPayload = MetaField<'UpdateRefsPayload'> & InputObject;

export interface UpdateRepositoryPayload extends MetaField<'UpdateRepositoryPayload'>, InputObject {
	/**
	 * The updated repository.
	 */
	repository?: Nullable<Repository>;
}

export interface UpdateSubscriptionPayload extends MetaField<'UpdateSubscriptionPayload'>, InputObject {
	/**
	 * The input subscribable entity.
	 */
	subscribable?: Nullable<Subscribable>;
}

export interface UpdateTeamDiscussionCommentPayload
	extends MetaField<'UpdateTeamDiscussionCommentPayload'>,
		InputObject {
	/**
	 * The updated comment.
	 */
	teamDiscussionComment?: Nullable<TeamDiscussionComment>;
}

export interface UpdateTeamDiscussionPayload extends MetaField<'UpdateTeamDiscussionPayload'>, InputObject {
	/**
	 * The updated discussion.
	 */
	teamDiscussion?: Nullable<TeamDiscussion>;
}

export interface UpdateTeamReviewAssignmentPayload extends MetaField<'UpdateTeamReviewAssignmentPayload'>, InputObject {
	/**
	 * The team that was modified.
	 */
	team?: Nullable<Team>;
}

export interface UpdateTopicsPayload extends MetaField<'UpdateTopicsPayload'>, InputObject {
	/**
	 * Names of the provided topics that are not valid.
	 */
	invalidTopicNames?: Nullable<string[]>;

	/**
	 * The updated repository.
	 */
	repository?: Nullable<Repository>;
}

export interface VerifyVerifiableDomainPayload extends MetaField<'VerifyVerifiableDomainPayload'>, InputObject {
	/**
	 * The verifiable domain that was verified.
	 */
	domain?: Nullable<VerifiableDomain>;
}
